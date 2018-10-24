import React from 'react';
import Card from './Card';

const CardList = ({coinObj}) => {
    //This array holds the id of the coins I am interested in.
    const coinsIdArray = [1, 1027, 1958, 2577];
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