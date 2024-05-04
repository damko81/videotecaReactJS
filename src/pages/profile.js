import React, { useState } from 'react'
import { getId, getName, getPassword, getUsername, logoutUserAction, updateUserAction } from './Action';

export default function useProfile() {

  const [id]=useState(getId());
  const [name,setName]=useState(getName());
  const [username,setUsername]=useState(getUsername());
  const [password]=useState(getPassword());
  const [newPassword,setNewPassword]=useState(null);
  const [newPasswordConf,setNewPasswordConf]=useState(null);

  const [changePassword, setChangePassword] = useState(false);  

  var nameTmp = getName();

  const handleLogout=()=>{
    logoutUserAction();
    window.location.reload(true);
  }

  const handleUpdate=()=>{
  
    var values = {
                    id:id,
                    name:name,
                    username:username,
                    password:(newPassword !== null && newPassword !== '' && newPasswordConf !== null && newPasswordConf !== '' && newPassword === newPasswordConf)?newPassword:password
                 };
  
    updateUserAction(values);
    handleLogout();
  }

  const updateDialog = () => {
    if (window.confirm("Update User?")){ 
      handleUpdate();
    }      
}

  return (
    <div className="modal-dialog" role="document">
           <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateUsersModalLabel">Edit User {nameTmp}?</h5>
              </div>
              <div className="modal-body">
                <form>
                    <div className="form-group">
                      <label for="name">Full Name</label>
                      <input type="text" name="name" className="form-control" value={name} id="name" onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" placeholder="Full Name" required/>
                    </div>
                    <input type="hidden" name="id" className="form-control" value={id} id="id" placeholder="id"/>
                    <div className="form-group">
                      <label for="genre">Username</label>
                      <input type="text" name="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" name="password" className="form-control" value={password} id="password" placeholder="Password" readonly required/>
                    </div>
                    { changePassword &&
                      <div className="form-group">
                        <label for="newPassword">New Password</label>
                        <input type="password" name="newPassword" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} id="newPassword" placeholder="Enter New Password"/>
                      </div>
                    }
                    { changePassword &&
                      <div className="form-group">
                        <label for="newPasswordConf">New Password (Confirm)</label>
                        <input type="password" name="newPasswordConf" className="form-control" value={newPasswordConf} onChange={(e) => setNewPasswordConf(e.target.value)} id="newPasswordConf" placeholder="Please confirm New Password"/>
                      </div>
                    }
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={() => setChangePassword(!changePassword)}>Change password</button>
                      <button type="button" className="btn btn-primary" onClick={updateDialog}>Save changes</button>
                    </div>
                </form>
              </div>
          </div>
        </div>
     )
}
