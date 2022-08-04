import Card from 'react-bootstrap/Card';
import React from 'react';

export default class CardMovie extends React.Component {

  constructor(props) {
    super(props);
  
    this.state={
        movie : props.movie
    }
  }

    render(){
          return (
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Title>{this.state.movie.title}</Card.Title>
            <Card.Img variant="top" src={(this.state.movie.image_url == "http://image.tmdb.org/t/p/w500null")?`https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`:this.state.movie.image_url} />
            <Card.Body>  
              <Card.Subtitle >
                {this.state.movie.overview}         
              </Card.Subtitle >
              <Card.Title> 
                Votes : {this.state.movie.average_votes}
                </Card.Title>
                <Card.Title> 
                popularity : {this.state.movie.popularity}
                </Card.Title>
                <Card.Title> 
                Released Date :{this.state.movie.released_on}
                </Card.Title>
            </Card.Body> 
          </Card>
          </>
        );
    }

}

