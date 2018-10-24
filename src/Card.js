import React from 'react';

const Card = ({name, rank, price, percentChange24, logoImg, percentChange7D}) => {
    // destructering the data from api to be used.
    return (
        <div className="card shadow" style={{height: '26rem', width: '15rem', margin: '.5rem', paddingBottom: '8rem', paddingTop: '1rem'}}>
            <img alt='coin/stock logo' src={`${logoImg}`} className="mx-auto card-img-top w-50 h-50" />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <h5 className="text-center">{`Rank: ${rank}`}</h5>
            </div>
            <ul className="list-group list-group-flush text-nowrap" style={{fontSize: '1rem'}}>
                <li className="list-group-item">{`Price: `}<b className="font-weight-bold">{`$${price.toFixed(3)}`}</b></li>
                <li className="list-group-item">{`Change over 24hrs: ${percentChange24}%`}</li>
                <li className="list-group-item">{`Change over 7 days: ${percentChange7D}%`}</li>
            </ul>
            
        </div>
    )
}

export default Card;