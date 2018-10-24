import React from 'react';
import Card from './Card';

const CardList = ({coinObj}) => {
    //This array holds the id of the coins I am interested in.
    // const coinsIdArray = [1, 1027, 1958, 2577, 52, 1720];
    const coinsIdObjectArr = [
        {coinId: 1, coinImg: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"},
        {coinId: 1027, coinImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png"},
        {coinId: 52, coinImg: "https://www.bitprime.co.nz/wp-content/uploads/2017/06/xrp-symbol-black-400x400.png"},
        {coinId: 1958, coinImg: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1528709715"},
        {coinId: 2577, coinImg: "https://www.buriedone.com/images/rvnlogo.png"},
    ]
    // send data to the card
    return (
        <div className="container-fluid row justify-content-center">
            {
                coinsIdObjectArr.map((object) => {
                    return (
                        <Card
                            name={coinObj[object.coinId].name} 
                            rank={coinObj[object.coinId].rank} 
                            price={coinObj[object.coinId].quotes["USD"].price} 
                            percentChange24={coinObj[object.coinId].quotes["USD"].percent_change_24h}
                            logoImg={object.coinImg} 
                        />
                    )
                })  
            }
        </div>
    )
}

export default CardList;