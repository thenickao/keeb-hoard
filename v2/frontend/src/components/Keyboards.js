// import React, {useEffect, useState} from 'react'
// import ShowKeyboards from './ShowKeyboards'

// function Keyboards() {
//     const [keyboards,setKeyboards] = useState([])

//     useEffect(() => {
//         fetch("/api/v1/keyboards/keyboards")
//             .then(res => res.json())
//             .then(data => {
//                 setKeyboards(data)
//             })
//             .catch(err => console.log(err))
//         }, [])

//     return(
//         <div className="keyboards container">
//             <h1>Keyboards</h1>
//             {/* {keyboards.map((keyboard) => (
//                 <ShowKeyboards
//                     name={keyboard.name}
//                     size={keyboard.size}
//                     case_material={keyboard.case_material}
//                     connectivity={keyboard.connectivity}
//                     backlit={keyboard.backlit}
//                     knob={keyboard.knob}
//                 />
//             ))} */}
//         </div>
//     )
// }

// export default Keyboards

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKeyboards();
  }, []);

  const fetchKeyboards = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/keyboards');
      setKeyboards(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Keyboards</h1>
      {keyboards.map((keyboard) => (
        <div key={keyboard.id}>
          <h3>{keyboard.name}</h3>
          <p>Brand: {keyboard.size}</p>
          <p>Layout: {keyboard.case_material}</p>
          <p>Type: {keyboard.connectivity}</p>
          <p>Type: {keyboard.backlit}</p>
          <p>Type: {keyboard.knob}</p>

        </div>
      ))}
    </div>
  );
};

export default Keyboards;
