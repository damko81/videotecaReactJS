import { api } from "../config/api";
import Cookies from 'js-cookie';

export const AuthenticationService = (username,password) => {

      fetch('http://192.168.1.14:8080/movie/basicauth',{headers:{authorization: createBasicAuthToken(username, password)}})
        .then((res) => {
             registerSuccessfulLogin(username, password);
             Cookies.set("authenticatedUser", username);
             window.location.reload(true);
        });
}; 

export const createBasicAuthToken = (username,password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}; 

export const registerSuccessfulLogin = (username,password) => {
   let basicAuthToken = createBasicAuthToken(username, password);
   window.sessionStorage.setItem("authenticatedUser", basicAuthToken);
   Cookies.set("username", username);
   Cookies.set("password", password);
}; 

export const signUpUser = async reqData => {
  try {

      await api.post('/users/save', reqData);
    
  } catch (error) {
    console.error('Error signing up user:', error);
  }
};

export const handleLoginAuth = reqData => {
  AuthenticationService(reqData.username,reqData.password);  
}

// singin user
export const signInUser = async reqData => {
    try {
           
            //Preverimo, ali gre za autorizirano osebo in ta zmaga.
            handleLoginAuth(reqData);

            let authenticatedUser = getAuthenticatedUser();
          
            if(authenticatedUser===null  || authenticatedUser===undefined){
                  const response = await api.post('/users/login', reqData);
                  const {id, name, password,username} = response.data;
                
                  registerSuccessfulLogin(username, password);

                  // Store the credentials
                  Cookies.set('id', id);
                  Cookies.set('name', name);
                  Cookies.set('username', username);
                  Cookies.set('password', password);
            }
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

  export const getAuthenticatedUser = () => {
    return Cookies.get("authenticatedUser");
  };  

export const logoutUserAction = () => {
    Cookies.remove('id');
    Cookies.remove('name');
    Cookies.remove('username');
    Cookies.remove('password');
    Cookies.remove('authenticatedUser');
    window.sessionStorage.removeItem("authenticatedUser");
  };