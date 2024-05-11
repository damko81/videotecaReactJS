import { useEffect, useState } from "react";
import { api } from "../../config/api";
import axios from "axios";

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
      }, []);
      
      return loginFiles;
   
};