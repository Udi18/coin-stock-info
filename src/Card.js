import React from 'react';

const Card = ({name, rank, price, percentChange24}) => {
    // destructering the data from api to be used.
    return (
        <div className="card shadow" style={{width: '18rem'}}>
            <img alt='coin/stock logo' src='https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png' className="mx-auto card-img-top w-50 h-50" />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <h5 className="text-center">{`Rank: ${rank}`}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Price: $${price.toFixed(3)}`}</li>
                <li className="list-group-item">{`Change over 24hrs: ${percentChange24}%`}</li>
            </ul>
            
        </div>
    )
}

export default Card;