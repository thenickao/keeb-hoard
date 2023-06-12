import React, {useState, useEffect} from 'react'

const App = () => {
  
  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/keyboards").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

    </div>
  )
}

export default App