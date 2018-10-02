import React, { Component } from 'react';
import Reset from '../Reset/Reset'

class Banner extends Component{
    renderButton(){
        if(this.props.lose){
            return <Reset reset = {this.props.reset}/>
        }
    }
    render(){
      return(
        <div id = 'banner'>
            <div>{this.props.score}</div>
            {this.props.content}
            {this.renderButton()}
        </div>
      )
    }
  }

export default Banner;
  