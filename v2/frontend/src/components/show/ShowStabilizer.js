import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom"

function ShowStabilizer() {
  const { id } = useParams()  
  const [stabilizer, setStabilizer] = useState();
    
    useEffect(() => {
      fetch(`http://localhost:8000/stabilizer/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setStabilizer(data.data);
        })
        .catch(error => {
          console.error("Error fetching stabilizer:", error);
        });
    }, [id]);
    if (!stabilizer) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="stabilizer container">
            <Link to="/stabilizer/index" className="btn btn-primary">
              Back to All Stabilizers
            </Link>
            <br></br><br></br>
            <h1>{stabilizer.name}</h1>
            <br></br>
            <p>Type: {stabilizer.type}</p>
        </div>
    )
}

export default ShowStabilizer