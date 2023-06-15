import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'

function Home() {
    return(
        <div className="home container">
            <h1>Welcome to the Keeb Hoard</h1>
            <Link to='/register' className='btn btn-primary btn-lg'>Create Profile</Link>
        </div>
    )
}

export default Home