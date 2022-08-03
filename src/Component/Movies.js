import React from "react";
import CardMovie from "./CardMovie";
import axios from "axios";

export default class movies extends React.Component{

    constructor(props){
        super(props)

        this.state={
        search : this.props.search,
        moviesState : this.movies(this.props.search) ,
        moviesData:[]
        }
        // console.log(this.props.movieList)

    }


    render(){
        return(
            
            <ul>
            {         
            this.state.moviesState.length>0 &&
            this.state.moviesState.map((element,index)=>(
                <li>
                <CardMovie movie={element} key={index}/>
                </li>
              ))
            
            }  
          </ul>
           
        )
    
    }
    movies = async () => {
        try {
         
          let url = `https://hasanappcity.herokuapp.com/movies?query=${this.state.search}`;
          let obj = await axios.get(url);
       
          this.setState({
            moviesData: obj.data
          });
        
    
        } catch (error) {
          alert('no MOvied for this lcoation')
        }
      }
    



};