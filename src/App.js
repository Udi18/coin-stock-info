import React, { Component } from 'react';
import CardList from './CardList';
// a test file for starting off.
// import { coinObj } from './coinObj';


class App extends Component {
  //I have tried with props here too, but don't know why that would matter in the case.
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
      
      // .then(coinObj => console.log(coinObj))
  }
  //render cards with data from api
  //The state is changed when I run this with the React Dev tools but it does not render new info.
  render() {
    let { coinObj } = this.state;
    //This console loads twice as expected and the second time it has the object from coinmarketplace.
    console.log(coinObj);

    return coinObj === null ?
      <h2>Loading</h2> :    
    (
      <div>
        <h1>Coins and Stocks</h1>
        <CardList coinObj={ coinObj } />
      </div>
    );

    //I use this below to try and force the program forward but then I cannot read any values from the object I put in state.
    /*return (
      <div>
        <h1>Coins and Stocks</h1>
        <CardList coinObj={ coinObj } />
      </div>
    );
    */  
  }
}

export default App;
