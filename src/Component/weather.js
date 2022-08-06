
import React from "react"
import Card from 'react-bootstrap/Card';

export default class Weather extends React.Component{

    constructor(props){
        super(props)

        this.state={
            weather : props.weather
        }
    }


    render(){
        return(
            <>  
           <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>{this.props.weather.Date}</Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            {this.state.weather.Discription}
            </Card.Text>
            </Card.Body>
           </Card>
            
          </>
        )
    
    }
};