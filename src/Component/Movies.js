import React from "react";
import CardMovie from "./CardMovie";

export default class movies extends React.Component{

    render(){
        return(
            
            <ul>
            {         

            this.props.movieList.map((element,index)=>(
                <li key={index}>
                <CardMovie movie={element} key={index}/>
                </li>
              ))
            }  
          </ul>
           
        )
    
    }
};