
import Card from 'react-bootstrap/Card';
import React from 'react';

export default class CardV extends React.Component {

  constructor(props) {
    super(props);
  
  }
  //datapro
    render(){
          return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.props.datapro.display_name}</Card.Title>
              <Card.Text>
              
           {this.props.datapro.lon +'\n'+ this.props.datapro.lat} 
            
                 </Card.Text>
             
            </Card.Body>
          </Card>
  );
    }

}

