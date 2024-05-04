import { useState } from "react";
import { createMovie } from "./Action";
import './Movie.css';


function CreateMovie() {
  
    const [name,setName]=useState('');
    const [rating,setRating]=useState('');
    const [director,setDirector]=useState('');
    const [stars,setStars]=useState('');
    const [disc,setDisc]=useState(''); 
    const [duration,setDuration]=useState('');
    const [description,setDescription]=useState('');  
    const [genre,setGenre]=useState(''); 
    const [releaseDate,setReleaseDate]=useState('');
    const [imageSrc,setImageSrc]=useState('');
    const [url,setUrl]=useState('');  
    
    const [isReadOnly,setIsReadOnly]=useState(false);

    const handleCreateMovie=()=>{

        const movieData={
            name,
            description,
            rating,
            director,
            stars,
            duration,
            disc,
            genre,
            releaseDate,
            imageSrc,
            imageSrcDec:'',
            url
        }
    
        createMovie(movieData); // Shranimo v backend DB.
        setIsReadOnly(true);
      };

      return (
           
      <div className="createMovie">
        <div className="modal-header">
           <h5 className="modal-title" id="createMovieModalLabel">Create Movie</h5>
        </div>
        <div className="modal-body">
           <form>
              <div className="form-group">
                 <label for="name">Name</label>
                 <input type="text" value={name} name="name" className="form-control" id="name" onChange={(e) => setName(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Name"/>
              </div>
              <div className="form-group">
                 <label for="genre">Genre</label>
                 <input type="text" value={genre} name="genre" className="form-control" id="genre" onChange={(e) => setGenre(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Genre"/>
              </div>
              <div className="form-group">
                <label for="releaseDate">ReleaseDate</label>
                <input type="text" value={releaseDate} name="releaseDate" className="form-control" id="releaseDate" onChange={(e) => setReleaseDate(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="ReleaseDate"/>
              </div>
              <div className="form-group">
                <label for="duration">Duration</label>
                <input type="text" value={duration} name="duration" className="form-control" id="duration" onChange={(e) => setDuration(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Duration"/>
              </div>
              <div className="form-group">
                <label for="rating">Rating</label>
                <input type="text" value={rating} name="rating" className="form-control" id="rating" onChange={(e) => setRating(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Rating"/>
              </div>
              <div className="form-group">
                 <label for="director">Director</label>
                 <input type="text" value={director} name="director" className="form-control" id="director" onChange={(e) => setDirector(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Director"/>
              </div>
              <div className="form-group">
                 <label for="stars">Stars</label>
                 <input type="text" value={stars} name="stars" className="form-control" id="stars" onChange={(e) => setStars(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Stars"/>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input type="text" value={description} name="description" className="form-control" id="description" onChange={(e) => setDescription(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Description"/>
              </div>
              <div className="form-group">
                <label for="disc">Disc</label>
                <input type="text" value={disc} name="disc" className="form-control" id="disc" onChange={(e) => setDisc(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Disc"/>
               </div>
              <div className="form-group">
                <label for="url">URL</label>
                <input type="text" value={url} name="url" className="form-control" id="url" onChange={(e) => setUrl(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="URL"/>
              </div>
              <div className="form-group">
                 <label for="imageSrc">Image Src</label>
                 <input type="text" value={imageSrc} name="imageSrc" className="form-control" id="imageSrc" onChange={(e) => setImageSrc(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Image Src"/>
              </div>
              <div className="text-right">
                <button disabled={isReadOnly} className="updateMovieButton" onClick={handleCreateMovie} style={{backgroundColor:isReadOnly?'#758AA2':'#1FAA59'}}>
                    <label className="updateMovieButtonText">{isReadOnly?'MOVIE SUCCESSFULLY CREATED':'CREATE MOVIE'}</label>
                </button>
              </div>
           </form>
        </div>
     </div>
     
      );
}

export default CreateMovie;