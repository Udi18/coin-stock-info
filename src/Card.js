import React from 'react';

const Card = ({name, rank, price, percentChange24, logoImg, percentChange7D}) => {
    // destructering the data from api to be used.
    return (
<<<<<<< HEAD
        <div className="card shadow align-baseline" style={{height: '340px', width: '225px', margin: '.75rem', marginBottom: '1rem', paddingBottom: '6rem', paddingTop: '1rem'}}>
=======
        <div className="card shadow" style={{height: '370px', width: '247px', margin: '15px', paddingTop: '15px'}}>
>>>>>>> c8fcf38bfa06a003f3eaffcd09c135730d2b02a4
            <img alt='coin/stock logo' style={{ height: '90px', width: '70px'}} src={`${logoImg}`} className="mx-auto card-img-top" />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <h5 className="text-center">{`Rank: ${rank}`}</h5>
            </div>
            <ul className="list-group list-group-flush text-nowrap" style={{fontSize: '16px'}}>
                <li className="list-group-item">{`Price: `}<b className="font-weight-bold">{`$${price.toFixed(3)}`}</b></li>
                <li className="list-group-item">{`Change over 24hrs: ${percentChange24}%`}</li>
                <li className="list-group-item">{`Change over 7 days: ${percentChange7D}%`}</li>
            </ul>
            
        </div>
    )
}

export default Card;