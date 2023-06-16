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

import ShowKeyboards from "./components/ShowKeyboards"
import ShowSwitches from "./components/ShowSwitches"
import ShowStabilizers from "./components/ShowStabilizers"
import ShowKeycaps from "./components/ShowKeycaps"

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
            <Route path="/keyboards/:id" element={<ShowKeyboards />} />
            <Route path="/components" element={<Components />} />
            <Route path="/switches" element={<Switches />} />
            <Route path="/switches/:id" element={<ShowSwitches />} />
            <Route path="/stabilizers" element={<Stabilizers />} />
            <Route path="/stabilizers/:id" element={<ShowStabilizers />} />
            <Route path="/keycaps" element={<Keycaps />} />
            <Route path="/keycaps/:id" element={<ShowKeycaps />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
          <Footer />

        </div>
      </Router>
  );
}

export default App;
