import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function CreateKeyboard() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [caseMaterial, setCaseMaterial] = useState("");
  const [connectivity, setConnectivity] = useState("");
  const [backlit, setBacklit] = useState("");
  const [knob, setKnob] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let submitBody = JSON.stringify({
      name,
      size,
      case_material: caseMaterial,
      connectivity,
      backlit: backlit.toString(),
      knob: knob.toString()
    })
    console.log(submitBody)
    fetch("http://localhost:8000/keyboard/", {
      method: "POST",
      body: submitBody,
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Keyboard created:", data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error creating keyboard:", error);
        setLoading(false);
      });
      navigate("/keyboard/index")
  };
   
  return (
    <div className="keyboard container">
      <Link to="/keyboard/index" className="btn btn-primary">
        CANCEL
      </Link>
      <br /><br />

      <h1>Create Keyboard</h1>
      <br />

      {loading ? (
        <div className="loading">Creating keyboard...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Ducky One 2 SF/GMMK PRO"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "350px" }}
          />
<br></br><br></br>
          <label htmlFor="size">Size (%):</label>
          <input
            type="number"
            id="size"
            placeholder="100%, 75%, 65% . . . etc."
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="caseMaterial">Case Material:</label>
          <input
            type="text"
            id="caseMaterial"
            placeholder="Aluminum/Plastic"
            value={caseMaterial}
            onChange={(e) => setCaseMaterial(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="connectivity">Connectivity:</label>
          <input
            type="text"
            id="connectivity"
            placeholder="Wired(USB-C)/Wireless"
            value={connectivity}
            onChange={(e) => setConnectivity(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="backlit">Backlit:</label>
          <input
            type="text"
            id="backlit"
            placeholder="White/RGB/None"
            value={backlit}
            onChange={(e) => setBacklit(e.target.value)}
            required
          />
<br></br><br></br>
          {/* <label htmlFor="knob">Knob:</label>
          <input
            type="checkbox"
            id="knob"
            checked={knob}
            onChange={(e) => setKnob(e.target.checked)}
          />
            <br></br><br></br> */}
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Send this Keyboard to the Hoard
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateKeyboard;

