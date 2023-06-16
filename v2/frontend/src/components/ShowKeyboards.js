import React from 'react'

function ShowKeyboards({name, size, case_material, connectivity, backlit, knob}) {
    return(
        <div className="ShowKeyboards container">
            <h1>Keyboards</h1>
            <h3>{name}</h3>
            <p>{size}</p>
            <p>{case_material}</p>
            <p>{connectivity}</p>
            <p>{backlit}</p>
            <p>{knob}</p>
        </div>
    )
}

export default ShowKeyboards