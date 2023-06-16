import React, {useEffect, useState} from 'react'
import ShowKeyboards from './ShowKeyboards'

function Keyboards() {
    const [keyboards,setKeyboards] = useState([])

    useEffect(() => {
      fetch('http://localhost:8000/keyboard/index', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'origin': 'http://localhost:3000'
        }
      })
        .then(response => response.json())
        .then(data => {
          setKeyboards(data)
          console.log(data)
        })
        .catch(error => {
          console.error('Error fetching keyboards:', error)
        });

        // fetch("/api/v1/keyboards")
        //     .then(res => res.json())
        //     .then(data => {
        //         setKeyboards(data)
        //         console.log(data)
        //     })
        //     .catch(err => console.log(err))
        }, [])

    return(
        <div className="keyboards container">
            <h1>Keyboards</h1>
            {/* {keyboards.map((keyboard) => (
              <ShowKeyboards
                key={keyboard.id} // Add a unique key prop for each rendered component
                name={keyboard.name}
                size={keyboard.size}
                case_material={keyboard.case_material}
                connectivity={keyboard.connectivity}
                backlit={keyboard.backlit}
                knob={keyboard.knob}
              />
            ))} */}
            {keyboards.length > 0 ? (
              <ShowKeyboards keyboard={keyboards[0]} />
            ) : (
              <p>No keyboards found</p>
            )}
        </div>
    )
}

export default Keyboards