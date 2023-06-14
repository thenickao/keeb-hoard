import React, {useState, useEffect} from 'react'
import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home"

import Keyboards from "./components/pages/Keyboards"
import Components from "./components/pages/Components"
import Switches from "./components/pages/Switches"
import Stabilizers from "./components/pages/Stabilizers"
import Keycaps from "./components/pages/Keycaps"

import ShowKeyboards from "./components/pages/ShowKeyboards"
import ShowSwitches from "./components/pages/ShowSwitches"
import ShowStabilizers from "./components/pages/ShowStabilizers"
import ShowKeycaps from "./components/pages/ShowKeycaps"

import LogIn from "./components/LogIn"
import Register from "./components/Register"


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
        <Route path="/keyboards" element={<Keyboards URL={URL} />} />
        <Route path="/keyboards/<id>" element={<ShowKeyboards URL={URL} />} />
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
