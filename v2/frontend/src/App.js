import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home"

import Keyboards from "./components/Keyboards"
import Components from "./components/Components"
import Switches from "./components/Switches"
import Stabilizers from "./components/Stabilizers"
import Keycaps from "./components/Keycaps"

import ShowKeyboard from "./components/ShowKeyboard"
import ShowSwitch from "./components/ShowSwitch"
import ShowStabilizer from "./components/ShowStabilizer"
import ShowKeycap from "./components/ShowKeycap"

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
            <Route path="/" element={<Home />} />
            <Route path="/keyboards" element={<Keyboards />} />
            <Route path="/keyboard/:id" element={<ShowKeyboard />} />
            <Route path="/components" element={<Components />} />
            <Route path="/switches" element={<Switches />} />
            <Route path="/switch/:id" element={<ShowSwitch />} />
            <Route path="/stabilizers" element={<Stabilizers />} />
            <Route path="/stabilizer/:id" element={<ShowStabilizer />} />
            <Route path="/keycaps" element={<Keycaps />} />
            <Route path="/keycap/:id" element={<ShowKeycap />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
          <Footer />

        </div>
      </Router>
  );
}

export default App;
