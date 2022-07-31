import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardV from './CardV';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      locationJSON: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  data = async () => {


    let key = `key=pk.4ec02d09293f1dae002d0d0cbfd4c232&`;
    let search = `q=${this.state.value}&`;
    let url = 'https://us1.locationiq.com/v1/search.php?';
    let format = 'format=json';
    let query = key + search + format;
    const arr = await axios.get(url + query);
    this.setState({
      locationJSON: arr.data
    });


  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let count= 0;
    this.data();

  }

// 
  renderElemnt = () => {
     let arr =this.state.locationJSON.map((element,index) => <CardV datapro={element} key={index}/>);
    return arr;
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
          {
            this.renderElemnt()
          
          }
        </div>


      </div>
    );
  }
}

export default App;
