import React, {useState} from "react"
import {Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

function Register() {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const {register, watch, handleSubmit, getValues, formState:{errors}} = useForm()

    const submitForm = (data) => {
        // console.log("Form submitted")
        // console.log(username)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPassword)
        
        // setUsername("")
        // setEmail("")
        // setPassword("")
        // setConfirmPassword("")
        reset()

        // console.log(data)

        const requestOptions = {
            
        }

        fetch("/auth/register", requestOptions)
    }

    // console.log(watch("username"))
    // console.log(watch("email"))
    // console.log(watch("password"))
    // console.log(watch("confirmPassword"))


    return(
        <div className="register container">
            <div className="form">
                <h1>Register</h1>
                <br></br>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="your username" {...register("username", {required:true, unique:true})}/>
                    </Form.Group>
                    {errors.username && errors.username.type === 'required' && <p style={{color:"red"}}><small>Username is required</small></p>}
                    {errors.username && errors.username.type === 'unique' && <p style={{color:"red"}}><small>Username is taken</small></p>}
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="your email" {...register("email", {required:true, unique:true})}/>
                    </Form.Group>
                    {errors.email && errors.email.type === 'required' && <p style={{color:"red"}}><small>Email is required</small></p>}
                    {errors.email && errors.email.type === 'unique' && <p style={{color:"red"}}><small>Email is taken</small></p>}
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password (must be 8 characters or longer)</Form.Label>
                        <Form.Control type="password" placeholder="your password" {...register("password", {required:true, minLength:8})}/>
                    </Form.Group>
                    {errors.password && errors.password.type === 'required' && <p style={{color:"red"}}><small>Password is required</small></p>}
                    {errors.password && errors.password.type === 'minLength' && <p style={{color:"red"}}><small>Password not long enough</small></p>}
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password" {...register("confirmPassword", {required:true, validate: (value) => value === getValues("password") || "Passwords do not match"})}/>
                    </Form.Group>
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p style={{color:"red"}}><small>Please confirm your password</small></p>}
                    {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p style={{color:"red"}}><small>Passwords do not match</small></p>}
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>Sign Up!</Button>
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