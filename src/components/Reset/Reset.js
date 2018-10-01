import React, { Component } from 'react';

class Button extends Component{

    render(){
      return(
        <div >
            <button onClick = {()=>{window.location.reload()}}>TRY AGAIN</button>
        </div>
      )
    }
  }

export default Button;
  