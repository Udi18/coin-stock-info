import React from 'react';

const Buttons = ({click, buttonIdObjectArr}) => {
   
    return (
        <div className="d-flex flex-row p-5 justify-content-center">
            {
                buttonIdObjectArr.map((object) => {
                    return <button key={object.coinId} id={object.coinId} onClick={click} className="list-group-item m-1" >{object.name}</button> 
                })
            }
        </div>
    )
}

export default Buttons;