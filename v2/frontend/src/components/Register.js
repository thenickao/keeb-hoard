import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const submitForm = () => {
        // console.log("Form submitted")
        // console.log(username)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPassword)
        
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <div className="register container">
            <div className="form">
                <h1>Register</h1>
                <br></br>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="your username" value={username} name="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="your email"value={email} name="email"onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="your password"value={password} name="password"onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password"value={confirmPassword} name="confirmPassword"onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={submitForm}>Sign Up!</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account? <Link to="/login">Log In Here</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default Register