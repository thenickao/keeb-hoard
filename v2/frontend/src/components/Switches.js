import React, { useEffect, useState } from 'react';

function Switches() {
  const [switches, setSwitches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/switch/index', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        setSwitches(data.data);
      })
      .catch(error => {
        console.error('Error fetching switches:', error);
      });
  }, []);

  return (
    <div className="switches container">
      <h1>Switches</h1>
      <br></br>
      {switches.map(switchItem => (
        <div key={switchItem.id} className="switch-item">
          <h3>
            <a href={`/switch/${switchItem.id}`}>{switchItem.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Switches