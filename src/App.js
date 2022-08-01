import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import CardV from './CardV';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      locationJSON: [],
      url : 'https://us1.locationiq.com/v1/search.php?',      
      urlMapfirst :`https://maps.locationiq.com/v3/staticmap?key=pk.4ec02d09293f1dae002d0d0cbfd4c232&center=`,
      urlMapsecond : `&size=800x400&zoom=8`,
      count :0,
      weatherData : []

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
    let obj = await axios.get(url + query);
   // console.log(obj.data[0]);
    this.setState({
    locationJSON: obj.data[0]
    
    });
    //console.log(this.state.locationJSON)
   
  }

  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    
    this.data();
    this.weather();
   
  }

  weather = async () => {
    if(this.state.locationJSON){
    
      try {
      let lat = this.state.locationJSON.lat;
      let lon = this.state.locationJSON.lon;
      let searchQuery =this.state.locationJSON.display_name;
      console.log(this.state.value)
      // let url = `http://localhost:3001/weather?lat=${lat}&lon=${lon}&searchQuery=${searchQuery}`;
      let url = `http://localhost:3001/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.value}`;
        let obj =await axios.get(url);
        this.setState({
          weatherData : obj.data.weather
          
          });

         
        
                     
    }catch (error) {
      alert('no weather for this lcoation')
    }
  
 
    
   // console.log('from weather'+obj.data);
  }else{
    console.log('no data');
  }
    
  }


  renderElemnt = () => {

    if (this.state.locationJSON) {
       return (
      <>
          <h1>{this.state.locationJSON.display_name}</h1>
          {/* <h1>{console.log(this.state.weatherData)}</h1> */}
          {/* <p>{this.state.locationJSON[0].display_name} </p> */}
          <img src={this.state.urlMapfirst+this.state.locationJSON.lat +','+ this.state.locationJSON.lon + this.state.urlMapsecond} alt='pgggg' /> 
       

      </>
    );
    }
    else{
      return (
        <>
            <h1>nothing</h1>

        </>
      );
    }
   
  }
  change =(event)=>{
    (event.target.value)===0 ?
     this.setState({
      url : 'https://us1.locationiq.com/v1/search.php?',
    }):this.setState({
      url : 'https://eu1.locationiq.com/v1/search.php?',
    });
    this.data();

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
            <Form.Select aria-label="Default select example"  onChange={this.change}>
          <option value ='0'>Us</option>
          <option value="1">Eu</option>
         
        </Form.Select>
        </div>

        <div>
        {
       // console.log(`from render ${this.state.weatherData}`)
          this.renderElemnt()
        }
        <ul>
         
          {
            <>
            
        {this.state.weatherData.map(element => (  
          <li>  
            {`${element.Date} \n ${element.Discription}`}  
          </li>  
        ))}  
            
             </>
          }
          
        
         </ul>    
        

        </div>

      </div>
      </>
    );
  }
}

export default App;
