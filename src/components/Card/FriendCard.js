import React, { Component } from "react";
import "./FriendCard.css";

class FriendCard extends Component{

  render(){
    return(
      <div className="card">
        <div className="img-container" onClick={this.props.onClick}>
          <img alt='#' src={this.props.image} />
        </div>
      </div>
    )
  }
}


export default FriendCard;
