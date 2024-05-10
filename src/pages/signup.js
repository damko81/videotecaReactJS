import React, { useState } from "react";
import { signUpUser } from "./Action";
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'

const SignUp = () => {
   
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [passwordConf,setPasswordConf]=useState('');

    const handleRegister  = () => {

        const values = {
            name,
            username,
            password
          }
          signUpUser(values);
          navigate("/log-in");
    };

    const userSchema = yup.object().shape({
        // name can not be an empty string so we will use the required function
        name: yup.string().required('Name is required'),
        // username can not be an empty string so we will use the required function
        username: yup.string().required('Username is required'),
        // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
        password: yup.string().min(6).required('Passwords is required'),
        passwordConf: yup.string()
            .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
        }),  
    })

    const validateForm = async e => {
        // creating a form data object
        let dataObject = {
          name: name,
          username: username,
          password: password,
          passwordConf: passwordConf,
        }
    
        // validating this dataObject concerning Yup userSchema
        const isValid = await userSchema.isValid(dataObject)
        if (isValid) {
            handleRegister();
        } else {
          alert('Form is Invalid')
        }
    }

    return (
        <div className="container col-lg-6">
            <h1 className="text-center">Registration</h1>
            <div className="card">
                <form>
                    <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required/>
                    </div>
                    <div clclassNameass="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group">
                        <label>Password (Confirm)</label>
                        <input type="password" className="form-control" name="passwordConf" id="passwordConf" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)}  placeholder="Please confirm password" required/>
                    </div>
                    <button onClick={validateForm} className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;