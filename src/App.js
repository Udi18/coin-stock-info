import React, { Component } from 'react';
import CardList from './CardList';
import Checkbox from './Checkbox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coinObj: null,
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
      <div className="text-center">
        <h1>Coins and Stocks</h1>
        <div>
          <Checkbox />
          <CardList coinObj={ coinObj } />
        </div>
      </div>
    );
  }
}

export default App;
