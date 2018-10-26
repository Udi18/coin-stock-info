import React, { Component } from 'react';
import CardList from './CardList';
import Buttons from './Buttons';
import TitleBar from './TitleBar';
import { coinsIdObjectArr } from './coinsIdObjectArr'

class App extends Component {
  constructor() {
    super()
    this.state = {
      coinObj: null,
      cardIdObjectArr: [],
      buttonIdObjectArr: coinsIdObjectArr
    }
  }

  onClick = (event) => {
    const coinNum = +event.target.id
    const newCardArr = coinsIdObjectArr.filter(coin => (coin.coinId === coinNum));
    const newCardObj = newCardArr[0];
    const compareArr = this.state.cardIdObjectArr.map((obj) => {
        return  obj.coinId;
      }
    )
    if(compareArr.includes(coinNum)) {
      const newState = this.state.cardIdObjectArr.filter(obj => (obj.coinId !== coinNum));
      this.setState({cardIdObjectArr: newState});

    } else{
    const newState = this.state.cardIdObjectArr.concat(newCardObj);
    this.setState({cardIdObjectArr: newState});
    }
  }

  //Get information from coinmarketcap api.
  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/')
      .then(response => response.json())
      .then(parsedJSON => this.setState(
        {coinObj: parsedJSON.data}
      ))
      .catch(error => console.log('Something went wrong!', error))
      
  }
  //render cards with data from api
  render() {
    let { coinObj } = this.state;

    return coinObj === null ?
      <h2>Loading</h2> :    
    (
      <div>
        <TitleBar />
        <div>
          <Buttons click={ this.onClick } buttonIdObjectArr={ this.state.buttonIdObjectArr } />
          <CardList coinObj={ coinObj } cardIdObjectArr={ this.state.cardIdObjectArr } />
        </div>
      </div>
    );
  }
}

export default App;
