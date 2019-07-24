import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    const [formInput, setFormInput] = useState({
        username: '',
        password: ''
    })
    const [loggedIn, setLoggedIn] = useState(false)

    const handleChanges = e => {
        setFormInput({ [e.target.name]: e.target.value })
    }

    const setRedirect = () => {
        setLoggedIn(true)
    }
    
    const renderRedirect = () => {
        if (loggedIn) {
            return <Redirect to="/todolist" />
        }
    }

    return ( 
        <div>
            <Form>
                <Form.Field >
                    <label>Username</label>
                    <input
                        type="text"
                        value={formInput.username}
                        name="username"
                        onChange={handleChanges}
                    ></input>
                </Form.Field>
                <Form.Field >
                    <label>Password</label>
                    <input
                        type="password"
                        value={formInput.password}
                        name="password"
                        onChange={handleChanges}
                    ></input>
                </Form.Field>
                {renderRedirect()}
                <button onClick={setRedirect}>Login</button>
            </Form>
        </div>
     );
}
 
export default Login;