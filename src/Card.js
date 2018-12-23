import React, { Component } from 'react'
import './Card.css';
export default class Card extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
    }
  }
  getLink = (id) => {
    let arr = ['0', '0']
    let str = id + '';
    let link = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
    arr.push(...str.split(''))
    return link + arr.join('') + '.png'
  }
  componentDidMount = () => {
    let card = document.getElementById("card")
    let cardItem = document.getElementById("card-item")
    card.addEventListener("click", function() {
      cardItem.classList.toggle('flipped')

    })
  }

  render() {
    const { id } = this.props
    const link = this.getLink(id);
    return (
      <div className="container" id="card">
        <div className="card" id="card-item">
          <div className="front">
            <img src={link} />
          </div>
          <div className="back">
            <img src="https://www.kidscollections.com.au/wp-content/uploads/2017/11/Pokemon-Pokeball-Rug.jpg" />
          </div>
        </div>
      </div>
    )
  }
}
