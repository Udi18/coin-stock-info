import React from 'react';
import Card from './Card';

const CardList = ({coinObj}) => {
    //This array holds the id of the coins I am interested in.
    const coinsIdArray = [1, 1027, 1958, 2577];
    //This shows me the first object in my object of objects when the cards are commented bottom is out.
    console.log(coinObj[1]);
    //Test if I can grab a value from it and it says that name is undefined but it is clearly their the example above.
    // console.log(coinObj[1].name);


    // send data to the card
    return (
        <div className="container-fluid row">
            <Card name={coinObj[coinsIdArray[0]].name} rank={coinObj[coinsIdArray[0]].rank} price={coinObj[coinsIdArray[0]].quotes["USD"].price} percentChange24={coinObj[coinsIdArray[0]].quotes["USD"].percent_change_24h} />
            <Card name={coinObj[coinsIdArray[1]].name} rank={coinObj[coinsIdArray[1]].rank} price={coinObj[coinsIdArray[1]].quotes["USD"].price} percentChange24={coinObj[coinsIdArray[1]].quotes["USD"].percent_change_24h} />
            <Card name={coinObj[coinsIdArray[2]].name} rank={coinObj[coinsIdArray[2]].rank} price={coinObj[coinsIdArray[2]].quotes["USD"].price} percentChange24={coinObj[coinsIdArray[2]].quotes["USD"].percent_change_24h} />
            <Card name={coinObj[coinsIdArray[3]].name} rank={coinObj[coinsIdArray[3]].rank} price={coinObj[coinsIdArray[3]].quotes["USD"].price} percentChange24={coinObj[coinsIdArray[3]].quotes["USD"].percent_change_24h} />
        </div>
    )
}

export default CardList;