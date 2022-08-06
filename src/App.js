import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React from 'react';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Movies from './Component/Movies';
import Dog from './Component/dog';
import Weather from "./Component/weather";
import './App.css';
import AnimatedText from 'react-animated-text-content';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
<link rel="stylesheet" href="sweetalert2.min.css"></link>



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dogDataArr : [],
      value: '',
      userInput:'',
      flag : false,
      dog :false,
      alert:false,
      url: 'https://us1.locationiq.com/v1/search.php?',
      urlMapfirst: `https://maps.locationiq.com/v3/staticmap?key=pk.4ec02d09293f1dae002d0d0cbfd4c232&center=`,
      urlMapsecond: `&size=800x400&zoom=8`,
      count: 0,
      Spinner : false,
      locationJSON: [],
      weatherData: [],
      moviesData: []

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  data = async () => {

    let key = `key=pk.4ec02d09293f1dae002d0d0cbfd4c232&`;
    let search = `q=${this.state.value}&`;
    let url = 'https://us1.locationiq.com/v1/search.php?';
    let format = 'format=json';
    let query = key + search + format;
    console.log(url)
    this.state.value &&
    await axios.get(url + query).then((value) => {
      this.setState({
        locationJSON: value.data[0],
        flag:true,
        Spinner: false,
        alert:true
      });
      this.weather(value.data[0].lat, value.data[0].lon);
    }).catch(() => {
      this.setState({
        locationJSON:[],
        flag:false,
        Spinner: false,
        alert: true
      });
      Swal.fire({
        title: 'Are you sure?',
        text: "there is no Item Found with this search !",
        icon: 'error',
        confirmButtonColor: '#3085d6'
      })
    })

  }



  handleChange(event) {

    this.setState({ value: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    this.setState({
      userInput: this.props.value,
      Spinner:true,
      moviesData: [],
      locationJSON: [],
      weatherData: [],
      dog : true
    });
    
    
    this.data();
    this.movies();
    this.dogs();
 }



  weather = async (lat, lon) => {
    if (this.state.locationJSON) {

      try {

        let url1 = `https://hasanappcity.herokuapp.com/weather?lat=${lat}&lon=${lon}&query=${this.state.value}`;
        let obj = await axios.get(url1);

        this.setState({
          weatherData: obj.data
        });

      } catch (error) {
        alert('hii im hassan')
      }
    } else {
      console.log('no data');
    }

  }

  render() {
    return (
      <>

        <div className="App">
        <NavBar />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" value={this.state.value} onChange={this.handleChange}  required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              {
                this.state.Spinner &&
               <Spinner animation="border" size="sm" variant="warning" />

              }
            
              Search!
            </Button>
          </Form>

        
          <div>
            {

              this.renderElemnt()
             
            }

          </div>

          <div className='codyElemtn' >
          <div className='div-movies'>

              {
              this.state.moviesData.length >0 &&
              <Movies movieList={this.state.moviesData} />
    
              }
              </div>

              <div className='div-Weather'>
              <ul>
             
             { this.state.weatherData.length >0 &&
                <h4 className='title-Card' >{`the weathers ...`}</h4>
                }
              {
               
                this.state.weatherData.map((element, index) => (
                  <li key={index}>
                    <Weather weather={element} key={index} />
                  </li>
                ))
              }
            </ul>
              </div>
          <div className ='div-dog' />
          <div className='innerDogDiv'>
               {
                this.state.dog &&
                <h4 className='title-Card' >{`Dogs Images random...`}</h4>
              
              }
              {
                this.state.dog &&
                 <Dog listDog = {this.state.dogDataArr}/>
              }
              </div>
               
              </div>
          
              </div>
         
        <div className='Footer'>
        <Footer />

        </div>
      </>
    );
  }


  movies = async () => {

     
      let url = `https://hasanappcity.herokuapp.com/movies?query=${this.state.value}`;
      await axios.get(url).then((value)=>{
       
            this.setState({
            moviesData: value.data
          });
        
        
      }).catch((err)=>{
        alert(err + 'Movies Function')
      });
 
  }

  dogs = async () => {

     
    let url = `https://hasanappcity.herokuapp.com/dog`;
    await axios.get(url).then((value)=>{
     
          this.setState({
            dogDataArr: value.data
        });
    }).catch((err)=>{
      alert(err + 'Dogs Function')
    });

}

  renderElemnt = () => {
 
    if (this.state.flag && this.state.locationJSON.lat&& this.state.locationJSON.lon) {
      return (
        <div className='div-img'>
          <h1>{this.state.locationJSON.display_name}</h1>
          <img src={this.state.urlMapfirst + this.state.locationJSON.lat+ ',' + this.state.locationJSON.lon+ this.state.urlMapsecond} alt='Map' />


        </div>
      );
    }
    else {
      return (
        <>
        <h1 className='SearchForAny'>
              <AnimatedText
              type='chars'
              interval={0.09}
              duration={0.83}
                animation={{
                y: '100px',
                ease: 'ease',
                scale: 7.96,
                
              }}
            >
            Search For Anything 
          </AnimatedText>
      </h1>
        </>
      );
    }

  }
 
}

export default App;
