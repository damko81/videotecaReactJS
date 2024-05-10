import React, { useState } from "react";
import { signInUser } from "./Action";
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'

const Login = () => {

    const navigate = useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    var isValidLogin = false;

    const handleLogin = async e => {
        e.preventDefault();
        const values = {
                         username,
                         password
                       }
                    
        isValidLogin = await signInUser(values);
        if(isValidLogin){
            navigate("/movies");
            window.location.reload(true);
          }
    };

    const userSchema = yup.object().shape({
        // username can not be an empty string so we will use the required function
        username: yup.string().required(),
        // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
        password: yup.string().min(6).required(),
    })

    const validateForm = async e => {
        // creating a form data object
        let dataObject = {
          username: username,
          password: password,
        }
    
        // validating this dataObject concerning Yup userSchema
        const isValid = await userSchema.isValid(dataObject)
        if (isValid) {
            handleLogin(e);
        } else {
          alert('Form is Invalid')
        }
    }

    return (
        <div className="container col-lg-6">
            <h1 className="text-center">Login</h1>
            <div className="card">
                <div className="card-body">
                    <form className="form-group">
                        <div className="form-group">
                            <label>User Name :</label>
                            <input type="text" className="form-control" value={username} name="username" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter User Name" required/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required/>
                        </div>
                        <button type="button" onClick={validateForm} className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;