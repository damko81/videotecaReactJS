import { useEffect, useState } from "react";
import { api } from "../../config/api";
import { getUsername } from "../../pages/Action";

export const useGetDownloadFiles = () => {
 
    const [exprFiles, setExprFiles] = useState([]);
     
        useEffect(() => {
            fetch('http://192.168.1.14:8080/file/downloadfiles')
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                setExprFiles(data);
              });
          }, []);
          
          return exprFiles;
};

export const useGetForLoginFiles = (username) => {
 
    const [loginFiles, setLoginFiles] = useState([]);

    useEffect(() => {
        fetch(`http://192.168.1.14:8080/file/filesForLogin/${username}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setLoginFiles(data);
          });
      }, [username]);
      
      return loginFiles;
   
};

export const upload = async file => {

    let fileName = getUsername() + '_' + file.name;
    let formData = new FormData();
    formData.append('file', file, fileName);
   
    try {

        return await api.post('/file/upload',formData)
                        .then((res) => {
                            return res
                        });          
        
    } catch (error) {
        console.error('Error upload file:', error,file.name);
    }

  };

  export const exprFile = async () => {
    
    try {
 
        return await api.post('/file/export')
                        .then((res) => {
                            return res
                        }); 
        
    } catch (error) {
        console.error('Error export file:', error);
    }

  };

  export const loadMoviesFromXml = async (name) => {
    
    try {
 
        return await api.post(`/file/loadMoviesFromXml/${name}`)
                        .then((res) => {
                            return res
                        });
        
    } catch (error) {
        console.error('Error loaded file:', error);
    }

  };

  export const deleteFile = async (name) => {

      return await api.delete(`/file/delete/${name}`)
                         .then((res) => {
                            return res
                         });              
};