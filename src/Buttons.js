import React from 'react';

const Buttons = ({click, buttonIdObjectArr, activeButtons}) => {

    const activeButtonArray = activeButtons.map(obj => obj.coinId)
    const determineClassName = (num) => {
        if(activeButtonArray.includes(num)) {
            return `"f5 dim black pointer list-group-item shadow-sm m-1 p-2 active"`
        } else {
            return `"f5 dim black pointer list-group-item shadow-sm m-1 p-2"`
        }
    }
   
    return (
        <div className="d-flex flex-row p-5 justify-content-center">
            {
                buttonIdObjectArr.map((object) => {
                    return <button key={object.coinId} id={object.coinId} onClick={click} className={determineClassName(object.coinId)} >{object.name}</button>
                })
            }
        </div>
    )
}

export default Buttons;