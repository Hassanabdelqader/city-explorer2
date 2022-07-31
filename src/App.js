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
  urlMapsecond : `&size=300x300&zoom=14`

     

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderAlert = () => {
    return(
    <Alert variant="danger">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    )
 
 }

  data = async () => {

    let key = `key=pk.4ec02d09293f1dae002d0d0cbfd4c232&`;
    let search = `q=${this.state.value}&`;
    let url = this.state.url;
    let format = 'format=json';
    let query = key + search + format;
    const arr = await axios.get(url + query).then(()=>{}).catch((err)=>{
      if(err.response.status=== 400 || err.response.status=== 404|| err.response.status=== 500){
      alert(`NOt Founnd ${err.response.status}`)
      }
    });
    this.setState({
      locationJSON: arr.data
    });
  }

  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.data();

  }

// 
  renderElemnt = () => {
     let arr =this.state.locationJSON.map((element,index) =>
     {
     return <CardV datapro={element} key={index} src={this.state.urlMapfirst+element.lat + ','+ element.lon +
     this.state.urlMapsecond} />
     }
     );
    return arr;
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
            this.renderElemnt()
          
          }
        </div>



            
 

      </div>
    );
  }
}

export default App;
