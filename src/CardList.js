import React from 'react';
import Card from './Card';

const CardList = ({coinObj}) => {
    //This array holds the id of the coins I am interested in.
    const coinsIdArray = [1, 1027, 1958, 2577];
    // send data to the card
    return (
        <div className="container-fluid row">
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