import { useEffect, useState } from "react";
import { api } from "../../config/api";

export const useGetMovies = () => {
 
const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        fetch('http://192.168.1.14:8080/movie/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setMovies(data);
          });
      }, []);
      
      return movies.sort((a, b) => a.name.localeCompare(b.name));
};

export const updateMovie = async (movieData) => {
  
  const res= await api.put('/movie/update',movieData);
  return res;
};

export const deleteMovie = async (id) => {

    const res= await api.delete(`/movie/delete/${id}`);
    return res;
};

