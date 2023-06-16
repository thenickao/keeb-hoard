import React, { useEffect, useState } from 'react';

function Keyboards() {
  const [keyboards, setKeyboards] = useState([]);

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
        setKeyboards(data.data);
      })
      .catch(error => {
        console.error('Error fetching keyboards:', error);
      });
  }, []);

  return (
    <div className="keyboards container">
      <h1>Keyboards</h1>
      <br></br>
      {keyboards.map(keyboard => (
        <div key={keyboard.id} className="keyboard-item">
          <h3>
            <a href={`/keyboard/${keyboard.id}`}>{keyboard.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Keyboards;
