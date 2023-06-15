import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className="home container">
            <h1>Welcome to the Hoard</h1>
            <Link to='/register' className='btn btn-primary btn-lg'>Create Profile</Link>
        </div>
    )
}

export default Home