import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function LogIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const logIn = () => {
        console.log(username)
        console.log(password)

        setUsername("")
        setPassword("")
    }
    
    return(
        <div className="login container">
            <div className="form">
                <h1>Log In</h1>
                <br></br>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="your username" value={username} name="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="your password"value={password} name="password"onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={logIn}>Log In</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Do not have an account? <Link to="/register">Register Here</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default LogIn