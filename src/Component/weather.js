
import React from "react"
import Card from 'react-bootstrap/Card';
import Cardweather from "./Cardweather";

export default class Weather extends React.Component{

    constructor(props){
        super(props)

        this.state={
            weather : props.weatherList
        }
    }


    render(){
        return(
            <>  
          <ul>
                {
                  this.props.weatherList.map((element, index) => (
                    <li>
                      <Cardweather weatheritem={element} key={index} />
                    </li>
                  ))
                }
              </ul>

          </>
        )
    
    }
};