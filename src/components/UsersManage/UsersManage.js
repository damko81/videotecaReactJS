import React, { useState } from 'react'
import { deleteUsers, useGetUsers } from './Action';
import Profile from "../../pages/profile";

function UsersManage() {

  let users = useGetUsers();

  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);      

  const handleSetShowUpdateUser=(user)=>{
     setSelectedUser(user);
     setShowUpdateUser(!showUpdateUser);
  }

  const handleDelete=(id)=>{
    deleteUsers(id) // Brisanje v BE bazi
     .then(() => {
        window.location.reload(true);
     });
  }

  const deleteDialog = (id) => {
    if (window.confirm("Delete?")){ 
      handleDelete(id);
    }      
  }

  return (
    <div className="container" id="main-container">
        <table className="table">
            <thead>
                <tr>
                <th>Full Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
             {users.map((user) => (  
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td><button className='btn btn-primary tooltips' onClick={() => handleSetShowUpdateUser(user)}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => deleteDialog(user.id)}>Delete</button></td>
                </tr>
               ))
              }  
            </tbody>
        </table>
        {
          showUpdateUser && <Profile selectedUser={selectedUser}/>
        } 
    </div>
  )
}

export default UsersManage
