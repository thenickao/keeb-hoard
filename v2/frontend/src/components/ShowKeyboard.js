import React, { useEffect, useState } from "react";

function ShowKeyboard({id}) {
    const [keyboard, setKeyboard] = useState();
  
    useEffect(() => {
      console.log(id)

      fetch(`http://localhost:8000/keyboard/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setKeyboard(data);
        })
        .catch(error => {
          console.error("Error fetching keyboard:", error);
        });
    }, [id]);
    if (!keyboard) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="keyboard container">
            <h1>{keyboard.name}</h1>
            <br></br>
            <p>{keyboard.size}</p>
            <p>{keyboard.case_material}</p>
            <p>{keyboard.connectivity}</p>
            <p>{keyboard.backlit}</p>
            <p>{keyboard.knob}</p>
        </div>
    )
}

export default ShowKeyboard

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

// function ShowKeyboards({ keyboard }) {
//     return (
//       <div>
//         <h3>Name: {keyboard.name}</h3>
//         <p>Size: {keyboard.size}</p>
//         <p>Case Material: {keyboard.case_material}</p>
//         <p>Connectivity: {keyboard.connectivity}</p>
//         <p>Backlit: {keyboard.backlit}</p>
//         <p>Knob: {keyboard.knob}</p>
//       </div>
//     );
//   }