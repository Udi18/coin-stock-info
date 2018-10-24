import React from 'react';
import Card from './Card';
import {coinsIdObjectArr} from './coinsIdObjectArr'

const CardList = ({coinObj}) => {
    return (
        <div className="container-fluid row justify-content-center">
            {
                coinsIdObjectArr.map((object) => {
                    return (
                        <Card
                            key={object.coinId}
                            name={coinObj[object.coinId].name} 
                            rank={coinObj[object.coinId].rank} 
                            price={coinObj[object.coinId].quotes["USD"].price} 
                            percentChange24={coinObj[object.coinId].quotes["USD"].percent_change_24h}
                            percentChange7D={coinObj[object.coinId].quotes["USD"].percent_change_7d}
                            logoImg={object.coinImg} 
                        />
                    )
                })  
            }
        </div>
    )
}

export default CardList;