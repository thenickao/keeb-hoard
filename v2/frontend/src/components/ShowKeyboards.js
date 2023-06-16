import React from 'react'

// function ShowKeyboards({name, size, case_material, connectivity, backlit, knob}) {
//     return(
//         <div className="ShowKeyboards container">
//             <h1>Keyboards</h1>
//             <h3>{name}</h3>
//             <p>{size}</p>
//             <p>{case_material}</p>
//             <p>{connectivity}</p>
//             <p>{backlit}</p>
//             <p>{knob}</p>
//         </div>
//     )
// }

function ShowKeyboards({ keyboard }) {
    return (
      <div>
        <h3>Name: {keyboard.name}</h3>
        <p>Size: {keyboard.size}</p>
        <p>Case Material: {keyboard.case_material}</p>
        <p>Connectivity: {keyboard.connectivity}</p>
        <p>Backlit: {keyboard.backlit}</p>
        <p>Knob: {keyboard.knob}</p>
      </div>
    );
  }

export default ShowKeyboards