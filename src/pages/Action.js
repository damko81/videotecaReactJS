import { api } from "../config/api";
import Cookies from 'js-cookie';

export const signUpUser = async reqData => {
  try {

      await api.post('/users/save', reqData);
    
  } catch (error) {
    console.error('Error signing up user:', error);
  }
};

// singin user
export const signInUser = async reqData => {
    try {
            const response = await api.post('/users/login', reqData);
            const {id, name, password,username} = response.data;
         
            // Store the credentials
            Cookies.set('id', id);
            Cookies.set('name', name);
            Cookies.set('username', username);
            Cookies.set('password', password);
    
            return true;
          
    } catch (error) {
      console.error('Error signing in user:', error,reqData);
      return false;
    }
  };

export const updateUserAction = async reqData => {
  try {
        await api.put('/users/update', reqData);
        
  } catch (error) {
    console.error('Error update in user:', error,reqData);
  }
};    

export const getUsername = () => {
      return Cookies.get("username");
  };

export const getPassword = () => {
     return Cookies.get("password");
  };  

export const getId = () => {
     return Cookies.get("id");
  };

export const getName = () => {
    return Cookies.get("name");
  };

export const logoutUserAction = () => {
    Cookies.remove('id');
    Cookies.remove('name');
    Cookies.remove('username');
    Cookies.remove('password');
  };