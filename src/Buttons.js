import React from 'react';
import {coinsIdObjectArr} from './coinsIdObjectArr'

const Buttons = () => {
    return (
        <div className="d-flex flex-row p-5 justify-content-center">
            {
                coinsIdObjectArr.map((object) => {
                    return <button key={object.coinId} className="list-group-item m-1" data-toggle="button" aria-pressed="false">{object.name}</button> 
                })
            }
        </div>
    )
}

export default Buttons;