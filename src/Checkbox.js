import React from 'react';
import {coinsIdObjectArr} from './coinsIdObjectArr'

const Checkbox = () => {
    return (
        <div className="list-group d-flex flex-row p-5 justify-content-center">
            {
                coinsIdObjectArr.map((object) => {
                    return <button key={object.coinId} className="list-group-item m-1">{object.name}</button> 
                })
            }
        </div>
    )
}

export default Checkbox;