import React from 'react'
import './App.css'

function App() {
  
  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/<keyboards>").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App">
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App