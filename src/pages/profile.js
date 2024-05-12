import React, { useState } from 'react'
import { getAuthenticatedUser, getId, getName, getPassword, getUsername, logoutUserAction, updateUserAction } from './Action';

export default function useProfile(selectedUser) {

  const selectedUserId = Object.keys(selectedUser).map((keys)=>selectedUser[keys].id);
  const selectedUserName = Object.keys(selectedUser).map((keys)=>selectedUser[keys].name);
  const selectedUserUsername = Object.keys(selectedUser).map((keys)=>selectedUser[keys].username);
  const selectedUserPassword = Object.keys(selectedUser).map((keys)=>selectedUser[keys].password);

  let authenticatedUser = selectedUserId.length === 0 ? getAuthenticatedUser() : undefined;
 
  const [id]=useState(selectedUserId.length === 0?getId():selectedUserId);
  const [name,setName]=useState(selectedUserId.length === 0?getName():selectedUserName);
  const [username,setUsername]=useState(selectedUserId.length === 0?getUsername():selectedUserUsername);
  const [password]=useState(selectedUserId.length === 0?getPassword():selectedUserPassword);
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
    if(selectedUserId.length === 0){
      handleLogout();
    }
    else{
      window.location.reload(true);
    }
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
                    {(authenticatedUser===null || authenticatedUser===undefined) &&
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => setChangePassword(!changePassword)}>Change password</button>
                        <button type="button" className="btn btn-primary" onClick={updateDialog}>Save changes</button>
                      </div>
                    }
                </form>
              </div>
          </div>
        </div>
     )
}
