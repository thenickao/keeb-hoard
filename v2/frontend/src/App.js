import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
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
  // const [display, setDisplay] = useState('')
  // useEffect(() => {
  //   fetch('/api/v1/keyboards')
  //   .then(response => response.json())
  //   .then(data => {console.log(data)
  //     setDisplay(data.display)
  //   })
  //   .catch(error => console.log(error))

  // }, [])

  return (
      <Router>
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
      </Router>
  );
}

export default App;
