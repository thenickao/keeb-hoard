import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom"

function ShowKeyboard() {
  const { id } = useParams()  
  const [keyboard, setKeyboard] = useState();
    
    useEffect(() => {
      fetch(`http://localhost:8000/keyboard/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setKeyboard(data.data);
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
            <Link to="/keyboard/index" className="btn btn-primary">
              Back to Keyboards
            </Link>
            <br></br><br></br>
            <h1>{keyboard.name}</h1>
            <br></br>
            <p>Size: {keyboard.size}%</p>
            <p>Case Material: {keyboard.case_material}</p>
            <p>Connectivity: {keyboard.connectivity}</p>
            <p>Backlit: {keyboard.backlit}</p>
            <p>Knob: {keyboard.knob === "true" ? "No" : "Yes"}</p>
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