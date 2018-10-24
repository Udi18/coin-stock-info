import React, { Component } from 'react';
import CardList from './CardList';
import Buttons from './Buttons';
import TitleBar from './TitleBar';

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
      <div>
        <TitleBar />
        <div>
          <Buttons />
          <CardList coinObj={ coinObj } />
        </div>
      </div>
    );
  }
}

export default App;
