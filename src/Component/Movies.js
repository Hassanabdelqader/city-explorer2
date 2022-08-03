import { render } from "@testing-library/react"
import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class movies extends React.Component{

    constructor(props){
        super(props)

        this.state={
            movie : props.movie
        }
    }


    render(){
        return(
            <>      
            <Card style={{ width: '18rem' }}>
            <Card.Title>{this.state.movie.title}</Card.Title>
            <Card.Img variant="top" src={(this.state.movie.image_url == "http://image.tmdb.org/t/p/w500null")?`https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`:this.state.movie.image_url} />
            <Card.Body>  
              <Card.Text>

                <p>{this.state.movie.overview}</p>
                <h5>Votes : {this.state.movie.average_votes}</h5>
                <h5>popularity : {this.state.movie.popularity}</h5>
                <h5>Released Date :{this.state.movie.released_on}</h5>

                
              </Card.Text>
            </Card.Body> 
          </Card>
          </>
        )
    
    }
};