import React from "react";
import CardMovie from "./CardMovie";

export default class movies extends React.Component{

    render(){
        return(
          <>
            <h3 className="title-Card">{'Movies Realted ...'}</h3>
            <ul>
            {         
                this.props.movieList.map((element,index)=>(
                <li key={index}>
                <CardMovie movie={element} key={index}/>
                </li>
              ))
            }  
          </ul>
          </>
        )
    
    }
};