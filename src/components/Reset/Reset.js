import React, { Component } from 'react';

class Button extends Component{

    render(){
      return(
        <div >
            <button onClick = {this.props.reset}>TRY AGAIN</button>
        </div>
      )
    }
  }

export default Button;
  