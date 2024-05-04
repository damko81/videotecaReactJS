import { deleteMovie } from './Action';
import './Movie.css';
import React, { useState } from "react";
import UpdateMovie from './UpdateMovie';
import { getUsername } from '../../pages/Action';

const Movie = ({ movie }) => {

let username = getUsername();    

const [showUpdateMovie, setShowUpdateMovie] = useState(false);   

const handleDelete=(id)=>{
    deleteMovie(id); // Brisanje v BE bazi
}

const deleteDialog = (id) => {
    if (window.confirm("Delete?")){ 
      handleDelete(id);
    }      
}

    return (
      <div className="col-md-6 col-xl-3" key={movie.id}> 
        <div className="card m-b-30">
            <div className="card-body row">
                <div className="col-6">
                    <a href={movie.url}><img src={movie.imageSrc} alt="" className="img-fluid rounded-circle w-60"/></a>
                    <p className="m-0">{movie.duration}</p>
                    <p className="m-0">Disc: {movie.disc}</p>
                </div>
                <div className="col-6 card-title align-self-center mb-0">
                    <h5 >{movie.name}</h5>
                    <p className="m-0">{movie.genre}</p>
                    <p className="m-0">Date: {movie.releaseDate} Rating: {movie.rating}</p>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i class="fa fa-envelope float-right"></i>Director: {movie.director}</li>
                <li className="list-group-item"><i class="fa fa-phone float-right"></i>Stars : {movie.stars}</li>
            </ul>
            <div className="card-body">
                <div className="float-right btn-group btn-group-sm">
                    <button className="btn btn-primary tooltips" data-placement="top" data-original-title="Edit" onClick={() => setShowUpdateMovie(!showUpdateMovie)}><i className="fa fa-pencil"></i></button>
                    {username!==null && username!==undefined &&
                        <button className="btn btn-secondary tooltips" data-placement="top" data-original-title="Delete" onClick={() => deleteDialog(movie.id)}><i className="fa fa-times"></i></button>
                    }
                </div>
            </div>
        </div>
        {
          showUpdateMovie && <UpdateMovie movie={movie} />
        } 
      </div> 
    );
  }
  
  export default Movie;