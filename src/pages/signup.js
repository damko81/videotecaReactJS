import React, { useState } from "react";
import { signUpUser } from "./Action";
import { useNavigate } from "react-router-dom"

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
        if(password !== '' && passwordConf !== '' && password===passwordConf){
            signUpUser(values);
            navigate("/log-in");
        }
    };

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
                    <button onClick={handleRegister} className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;