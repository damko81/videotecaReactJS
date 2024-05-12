import React, { useState } from 'react'
import { getAuthenticatedUser, getId, getName, getPassword, getUsername, logoutUserAction, updateUserAction } from './Action';

export default function useProfile({selectedUser}) {

  var selectedUserId;
  var selectedUserName;
  var selectedUserUsername;
  var selectedUserPassword;

  if(selectedUser !== undefined){
      selectedUserId = selectedUser.id;
      selectedUserName = selectedUser.name;
      selectedUserUsername = selectedUser.username;
      selectedUserPassword = selectedUser.password;
  }

  let authenticatedUser = selectedUser === undefined ? getAuthenticatedUser() : undefined;
 
  const [id]=useState(selectedUser === undefined?getId():selectedUserId);
  const [name,setName]=useState(selectedUser === undefined?getName():selectedUserName);
  const [username,setUsername]=useState(selectedUser === undefined?getUsername():selectedUserUsername);
  const [password]=useState(selectedUser === undefined?getPassword():selectedUserPassword);
  const [newPassword,setNewPassword]=useState(null);
  const [newPasswordConf,setNewPasswordConf]=useState(null);

  const [changePassword, setChangePassword] = useState(false);  

  var nameTmp = selectedUser === undefined ? getName():selectedUserName;

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
    if(selectedUser === undefined){
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
