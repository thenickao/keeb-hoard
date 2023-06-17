import React, { useEffect, useState } from 'react';

function Keycaps() {
  const [keycaps, setKeycaps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/keycap/index', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        setKeycaps(data.data);
      })
      .catch(error => {
        console.error('Error fetching keycaps:', error);
      });
  }, []);

  return (
    <div className="keycaps container">
      <h1>Keycaps</h1>
      <br></br>
      {keycaps.map(keycapItem => (
        <div key={keycapItem.id} className="keycap-item">
          <h3>
            <a href={`/keycap/${keycapItem.id}`}>{keycapItem.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Keycaps