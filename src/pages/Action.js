import { api } from "../config/api";
import Cookies from 'js-cookie';

// singin user
export const signInUser = async reqData => {
    try {
            const response = await api.post('/users/login', reqData);
            const {username} = response.data;
         
            // Store the credentials
            Cookies.set('username', username);
    
            return true;
          
    } catch (error) {
      console.error('Error signing in user:', error,reqData);
      return false;
    }
  };

  export const getUsername = () => {
      return Cookies.get("username");
  };

export const logoutUserAction = () => {
    Cookies.remove('username');
  };