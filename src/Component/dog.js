import axios from "axios";
import React from "react";


export default class dog extends React.Component{

    constructor(props){
        super(props);
        this.state={
           
        }
    
    }


render(){
       
    return (
      <div>
          <ul>
          {
            this.props.listDog.map((dog,index)=>(
               <li key={index}><img src={dog.url} className={'img-dog'} width={400} alt={`${dog.url}`} /> </li>
            ))
          }
          </ul>
       </div>
    )
}


}


