import FriendCard from '../Card/FriendCard'
import cards from "./cards.json"
import Banner from "../Banner/Banner"
import React, { Component } from 'react';
import './Game.css'
class Game extends Component{
    constructor(props){
        super(props)
        this.shuffle(cards)
        this.state = {
            clicked: [],
            cards: cards,
            win: null,
        }
    }

    checkClicked(id){
        if(this.state.win !== false && this.state.win !== true){
            if(this.state.clicked.includes(id)){
                this.setState({win: false})
            }
            else{
                if(this.state.clicked.length === this.state.cards.length-1){
                    this.setState({win: true})
                    return
                }
                const newClicked = this.state.clicked.slice()
                newClicked.push(id)
                const shuffledCards = this.state.cards.slice()
                this.shuffle(shuffledCards)
                this.setState({clicked: newClicked, cards: shuffledCards})
            }
        }
    }
    shuffle(cards){
        ///Fisher-Yates Shuffle Algorithm
        var i = cards.length
        var tempValue
        var randomIndex
        while(i !== 0){
            randomIndex = Math.floor(Math.random()*i)
            i -= 1;
            tempValue = cards[i]
            cards[i] = cards[randomIndex]
            cards[randomIndex] = tempValue
        }
        return cards
    }

    renderBanner(){
        if(this.state.win === true){
            return <Banner content="YOU WIN!" /> 
        }
        else if(this.state.win === false){
            return <Banner lose={true} content="YOU LOSE!" score = {(cards.length - this.state.clicked.length) + " LEFT!" } reset={()=>this.setState({clicked:[],win:null})}/>
        }
        else{
            return <Banner score = {(cards.length - this.state.clicked.length) + " LEFT!"}  />
        }
    }
    render(){

      return(
        <div >
            {this.renderBanner()}
            <div class='flex-container'>
                {this.state.cards.map((card)=>(
                    <FriendCard 
                        onClick = {() => this.checkClicked(card.id)}
                        image = {card.image}
                    />
                ))}
            </div>
        </div>
      )
    }
}
  
export default Game;