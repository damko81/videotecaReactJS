import React, { useState } from 'react'
import { deleteMovieByDisc, loadMovies } from '../components/Movie/Action';
import '../components/Movie/Movie.css';

export default function LoadDeleteMovies() {

  const [disc,setDisc]=useState('');
  const [isReadOnly,setIsReadOnly]=useState(false);
  const [showLoadedMovies,setShowLoadedMovies]=useState(true);
  const [showDeletedMovies,setShowDeletedMovies]=useState(true);
  
  const handleLoadMovies=()=>{

    loadMovies(disc); // Shranimo v backend DB.
    setIsReadOnly(true);
    setShowDeletedMovies(false);
  };

  const handleDeleteMovieByDisc=()=>{

    deleteMovieByDisc(disc); // Shranimo v backend DB.
    setIsReadOnly(true);
    setShowLoadedMovies(false);
  };

  const deleteMovieByDiscDialog = () => {
    if (window.confirm("Delete?")){ 
        handleDeleteMovieByDisc();
      }
  };

 
  return (

    <div className="container col-lg-6">
        <div className="modal-header">
           <h5 className="modal-title" id="updateMovieModalLabel">Load/Delete Movies</h5>
        </div>
        <div className="modal-body">
           <form>
              <div className="form-group">
                <label for="disc">Disc</label>
                <input type="text" value={disc} name="disc" className="form-control" id="disc" onChange={(e) => setDisc(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Disc"/>
               </div>
              <div className="text-right">
                {showLoadedMovies &&
                    <button disabled={isReadOnly} className="updateMovieButton" onClick={handleLoadMovies} style={{backgroundColor:isReadOnly?'#758AA2':'#1FAA59'}}>
                        <label className="updateMovieButtonText">{isReadOnly?'MOVIES SUCCESSFULLY LOADED':'LOAD MOVIES'}</label>
                    </button>
                 }
                 {showDeletedMovies  &&
                    <button disabled={isReadOnly} className="updateMovieButton" onClick={deleteMovieByDiscDialog} style={{backgroundColor:isReadOnly?'#758AA2':'#E6425E'}}>
                        <label className="updateMovieButtonText">{isReadOnly?'MOVIES SUCCESSFULLY DELETED':'DELETE MOVIES'}</label>
                    </button>
                 }
              </div>
           </form>
        </div>
     </div>

  )
}
