import React from 'react';
import Card from './Card';

const CardList = ({coinObj}) => {
    //This array holds the id of the coins I am interested in.
    const coinsIdArray = [1, 1027, 1958, 2577, 52, 1720];
    // const coinsIdObject = [
    //     {coinId: 1, coinImg: ""},
    //     {coinId: 1027, coinImg: ""},
    //     {coinId: 1958, coinImg: ""},
    //     {coinId: 2577, coinImg: ""},
    //     {coinId: 52, coinImg: ""},
    // ]
    // send data to the card
    return (
        <div className="container-fluid row justify-content-center">
            {
                coinsIdArray.map((number) => {
                    return (
                        <Card
                            name={coinObj[number].name} 
                            rank={coinObj[number].rank} 
                            price={coinObj[number].quotes["USD"].price} 
                            percentChange24={coinObj[number].quotes["USD"].percent_change_24h} 
                        />
                    )
                })  
            }
        </div>
    )
}

export default CardList;