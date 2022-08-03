
import Card from 'react-bootstrap/Card';
import React from 'react';

export default class Cardweather extends React.Component {

  constructor(props) {
    super(props);
  
  }


  //datapro
    render(){
          return (
            <div>
            <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>{this.props.weatheritem.Date}</Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            {this.props.weatheritem.Discription}
            </Card.Text>
            </Card.Body>
         </Card>
        </div>
  );
    }

}

