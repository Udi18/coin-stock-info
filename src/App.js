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
      cardIdObjectArr: [
        {coinId: 1, name: 'Bitcoin', coinImg: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"},
        {coinId: 1027, name: 'Ethereum', coinImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png"},
        {coinId: 52, name: 'XRP', coinImg: "https://www.bitprime.co.nz/wp-content/uploads/2017/06/xrp-symbol-black-400x400.png"},
        {coinId: 1831, name: 'Bitcoin Cash', coinImg: "https://www.bitcoincash.org/media-kit/3-bitcoin-cash-logo-ot-small.png"},
      ],
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
      <div className='text-center'>
        <TitleBar />
        <h2>Grab your coins by clicking the buttons below</h2>
        <p>All the data comes from CoinMarketCap</p>
        <div>
          <Buttons click={ this.onClick } buttonIdObjectArr={ this.state.buttonIdObjectArr } />
          <CardList coinObj={ coinObj } cardIdObjectArr={ this.state.cardIdObjectArr } />
        </div>
      </div>
    );
  }
}

export default App;
