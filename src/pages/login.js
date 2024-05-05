import React, { useState } from "react";
import { signInUser } from "./Action";

const Login = () => {

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
            window.location.reload(true);
          }
    };

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
                        <button type="button" onClick={handleLogin} className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;