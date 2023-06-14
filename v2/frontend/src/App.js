import React, {useState, useEffect} from 'react'
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Route, Routes} from 'react-router-dom'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/keyboards/', {
      'methods':'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/keyboards" element={<Keyboards/>} />
        <Route path="/components" element={<Components/>} />
        <Route path="/switches" element={<Switches URL={URL} />} />
        <Route path="/switches/<id>" element={<ShowSwitches URL={URL} />} />
        <Route path="/stabilizers" element={<Stabilizers URL={URL} />} />
        <Route path="/stabilizers/<id>" element={<ShowStabilizers URL={URL} />} />
        <Route path="/keycaps" element={<Keycaps URL={URL} />} />
        <Route path="/keycaps/<id>" element={<ShowKeycaps URL={URL} />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
