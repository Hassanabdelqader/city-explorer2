import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Component/Movies';
import Weather from "./Component/weather";
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',

      url: 'https://us1.locationiq.com/v1/search.php?',
      urlMapfirst: `https://maps.locationiq.com/v3/staticmap?key=pk.4ec02d09293f1dae002d0d0cbfd4c232&center=`,
      urlMapsecond: `&size=800x400&zoom=8`,
      count: 0,

      locationJSON: [],
      weatherData: [],
      moviesData: []

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  data = async () => {

    let key = `key=pk.4ec02d09293f1dae002d0d0cbfd4c232&`;
    let search = `q=${this.state.value}&`;
    let url = this.state.url;
    let format = 'format=json';
    let query = key + search + format;
    await axios.get(url + query).then((value) => {
      this.setState({
        locationJSON: value.data[0]

      });
      this.weather(value.data[0].lat, value.data[0].lon);
    }).catch(() => {
      alert('No Data for this city')
    })

  }



  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value,
      moviesData: [],
      locationJSON: [],
      weatherData: []
    });
    this.data();
    this.movies();


  }



  weather = async (lat, lon) => {
    if (this.state.locationJSON) {

      try {

        let url1 = `https://hasanappcity.herokuapp.com/weather?lat=${lat}&lon=${lon}`;
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

          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search </Form.Label>
              <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Expplor!
            </Button>
          </Form>

          <div>
            <Form.Select aria-label="Default select example" onChange={this.change}>
              <option value='0'>Us</option>
              <option value="1">Eu</option>

            </Form.Select>
          </div>

          <div>
            {
               this.renderElemnt()
            }

          </div>

          <div className='codyElemtn' >
            <div className='div-movies'>

              {
              <Movies movieList={this.state.moviesData} />
              }
            </div>

            <div className='div-Weather'>
              {
                <Weather weatherList={this.state.weatherData} />
              }
            </div>
          </div>
        </div>
      </>
    );
  }






  movies = async () => {
    try {
     
      let url = `https://hasanappcity.herokuapp.com/movies?query=${this.state.value}`;
      let obj = await axios.get(url);
   
      this.setState({
        moviesData: obj.data
      });

    } catch (error) {
      alert('no MOvied for this lcoation')
    }
  }


  change = (event) => {
    (event.target.value) === 0 ?
      this.setState({
        url: 'https://us1.locationiq.com/v1/search.php?',
      }) : this.setState({
        url: 'https://eu1.locationiq.com/v1/search.php?',
      });
    this.data();
    let c = 0;

  }

  renderElemnt = () => {

    if (this.state.locationJSON) {
      return (
        <>
          <h1>{this.state.locationJSON.display_name}</h1>
          <img src={this.state.urlMapfirst + this.state.locationJSON.lat + ',' + this.state.locationJSON.lon + this.state.urlMapsecond} alt='pgggg' />


        </>
      );
    }
    else {
      return (
        <>
          <h1>nothing</h1>

        </>
      );
    }

  }

}

export default App;
