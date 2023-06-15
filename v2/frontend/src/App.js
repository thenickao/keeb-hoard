import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
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
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/keyboards">
              <Keyboards/>
            </Route>
            <Route path="/keyboards/<id>">
              <ShowKeyboards/>
            </Route>
            <Route path="/components">
              <Components/>
            </Route>
            <Route path="/switches">
              <Switches/>
            </Route>
            <Route path="/switches/<id>">
              <ShowSwitches/>
            </Route>
            <Route path="/stabilizers">
              <Stabilizers/>
            </Route>
            <Route path="/stabilizers/<id>">
              <ShowStabilizers/>
            </Route>
            <Route path="/keycaps">
              <Keycaps/>
            </Route>
            <Route path="/keycaps/<id>">
              <ShowKeycaps/>
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          </Routes>
        
          <Footer />

        </div>
      </Router>
  );
}

export default App;
