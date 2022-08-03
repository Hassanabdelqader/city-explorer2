import React from "react";
import CardMovie from "./CardMovie";

export default class movies extends React.Component{

    constructor(props){
        super(props)

        this.state={
            movies : this.props.movieList
        }
        console.log(this.props.movieList)
    }


    render(){
        return(
            
            <ul>
            {         

            this.props.movieList.map((element,index)=>(
                <li>
                <CardMovie movie={element} key={index}/>
                </li>
              ))
            }  
          </ul>
           
        )
    
    }
};