import React from 'react';

const Card = ({name, rank, price, percentChange24, logoImg, percentChange7D}) => {
    // destructering the data from api to be used.
    return (
        <div className="card shadow" style={{height: '340px', width: '225px', margin: '.75rem', marginBottom: '1rem', paddingBottom: '6rem', paddingTop: '1rem'}}>
            <img alt='coin/stock logo' style={{ height: '90px', width: '70px'}} src={`${logoImg}`} className="mx-auto card-img-top" />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <h5 className="text-center">{`Rank: ${rank}`}</h5>
            </div>
            <ul className="list-group list-group-flush" style={{fontSize: '1rem'}}>
                <li className="list-group-item font-weight-bold">{`Price: $${price.toFixed(3)}`}</li>
                <li className="list-group-item">{`Change over 24hrs: ${percentChange24}%`}</li>
                <li className="list-group-item">{`Change over 7 days: ${percentChange7D}%`}</li>
            </ul>
            
        </div>
    )
}

export default Card;