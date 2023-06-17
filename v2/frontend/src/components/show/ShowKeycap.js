import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom"

function ShowKeycap() {
  const { id } = useParams()  
  const [keycap, setKeycap] = useState();
    
    useEffect(() => {
      fetch(`http://localhost:8000/keycap/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setKeycap(data.data);
        })
        .catch(error => {
          console.error("Error fetching keycap:", error);
        });
    }, [id]);
    if (!keycap) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="keycap container">
            <Link to="/keycap/index" className="btn btn-primary">
              Back to All Keycaps
            </Link>
            <br></br><br></br>
            <h1>{keycap.name}</h1>
            <br></br>
            <p>Material: {keycap.material}</p>
            <p>Profile: {keycap.profile}</p>
            <p>Legend: {keycap.legend}</p>
        </div>
    )
}

export default ShowKeycap