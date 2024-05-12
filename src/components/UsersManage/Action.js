import { useEffect, useState } from "react";
import { api } from "../../config/api";

export const useGetUsers = () => {
 
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        fetch('http://192.168.1.14:8080/users/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setUsers(data);
          });
      }, []);
      
      return users;
};

export const updateUsers = async reqData => {
    try {
          await api.put('/users/update', reqData)
                   .then((res) => {
                        return res
                    }); 
          
    } catch (error) {
      console.error('Error update in user:', error,reqData);
    }
  }; 

export const deleteUsers = async (id) => {

    return await api.delete(`/users/delete/${id}`)
                       .then((res) => {
                          return res
                       });              
};