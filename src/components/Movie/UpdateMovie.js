import { useState } from "react";
import { updateMovie } from "./Action";

function UpdateMovie({movie}) {
  
    const {id} = movie;
    const {name} = movie;
    const [nameNew,setName]=useState(name);
    const {rating} = movie;
    const [ratingNew,setRating]=useState(rating);
    const {director} = movie;
    const [directorNew,setDirector]=useState(director);   
    const {stars} = movie;
    const [starsNew,setStars]=useState(stars);   
    const {disc} = movie;
    const [discNew,setDisc]=useState(disc);  
    const {duration} = movie;
    const [durationNew,setDuration]=useState(duration);  
    const {description} = movie;
    const [descriptionNew,setDescription]=useState(description);  
    const {genre} = movie;
    const [genreNew,setGenre]=useState(genre); 
    const {releaseDate} = movie;
    const [releaseDateNew,setReleaseDate]=useState(releaseDate);
    const {imageSrc} = movie;
    const [imageSrcNew,setImageSrc]=useState(imageSrc);
    const {url} = movie;
    const [urlNew,setUrl]=useState(url);  
    
    const [isReadOnly,setIsReadOnly]=useState(false);

    const handleInputChange=(key,value)=>{
        if(key==='name')setName(value);
        else if(key==='description')setDescription(value);
        else if(key==='rating')setRating(value);
        else if(key==='director')setDirector(value);
        else if(key==='stars')setStars(value);
        else if(key==='disc')setDisc(value);
        else if(key==='duration')setDuration(value);
        else if(key==='genre')setGenre(value);
        else if(key==='releaseDate')setReleaseDate(value);
        else if(key==='imageSrc')setImageSrc(value);
        else if(key==='url')setUrl(value);
      };

      const handleUpdateMovie=()=>{

        const movieData={
            id,
            name:nameNew,
            description:descriptionNew,
            rating:ratingNew,
            director:directorNew,
            stars:starsNew,
            duration:durationNew,
            disc:discNew,
            genre:genreNew,
            releaseDate:releaseDateNew,
            imageSrc:imageSrcNew,
            imageSrcDec:'',
            url:urlNew
        }
    
        updateMovie(movieData); // Shranimo v backend DB.
        setIsReadOnly(true);
      };

      return (
           
        <div className="modal-content">
        <div className="modal-header">
           <h5 className="modal-title" id="updateMovieModalLabel">Edit Movie {name}?</h5>
        </div>
        <div className="modal-body">
           <form>
              <div className="form-group">
                 <label for="name">Name</label>
                 <input type="text" value={nameNew} name="name" className="form-control" id="name" onChange={(e) => setName(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Name"/>
              </div>
              <input type="hidden" value={id} name="id" className="form-control" id="id" placeholder="id"/>
              <div className="form-group">
                 <label for="genre">Genre</label>
                 <input type="text" value={genreNew} name="genre" className="form-control" id="genre" onChange={(e) => setGenre(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Genre"/>
              </div>
              <div className="form-group">
                <label for="releaseDate">ReleaseDate</label>
                <input type="text" value={releaseDateNew} name="releaseDate" className="form-control" id="releaseDate" onChange={(e) => setReleaseDate(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="ReleaseDate"/>
              </div>
              <div className="form-group">
                <label for="duration">Duration</label>
                <input type="text" value={durationNew} name="duration" className="form-control" id="duration" onChange={(e) => setDuration(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Duration"/>
              </div>
              <div className="form-group">
                <label for="rating">Rating</label>
                <input type="text" value={ratingNew} name="rating" className="form-control" id="rating" onChange={(e) => setRating(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Rating"/>
              </div>
              <div className="form-group">
                 <label for="director">Director</label>
                 <input type="text" value={directorNew} name="director" className="form-control" id="director" onChange={(e) => setDirector(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Director"/>
              </div>
              <div className="form-group">
                 <label for="stars">Stars</label>
                 <input type="text" value={starsNew} name="stars" className="form-control" id="stars" onChange={(e) => setStars(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Stars"/>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input type="text" value={descriptionNew} name="description" className="form-control" id="description" onChange={(e) => setDescription(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Description"/>
              </div>
              <div className="form-group">
                <label for="disc">Disc</label>
                <input type="text" value={discNew} name="disc" className="form-control" id="disc" onChange={(e) => setDisc(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Disc"/>
               </div>
              <div className="form-group">
                <label for="url">URL</label>
                <input type="text" value={urlNew} name="url" className="form-control" id="url" onChange={(e) => setUrl(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="URL"/>
              </div>
              <div className="form-group">
                 <label for="imageSrc">Image Src</label>
                 <input type="text" value={imageSrcNew} name="imageSrc" className="form-control" id="imageSrc" onChange={(e) => setImageSrc(e.target.value)} style={{backgroundColor:isReadOnly?'#758AA2':'#00000000'}} readOnly={isReadOnly} placeholder="Image Src"/>
              </div>
              <div className="text-right">
                <button disabled={isReadOnly} className="button dark" onClick={handleUpdateMovie} style={{backgroundColor:isReadOnly?'#758AA2':'#1FAA59'}}>
                    <label>{isReadOnly?'MOVIE SUCCESSFULLY UPDATED':'UPDATE MOVIE'}</label>
                </button>
              </div>
           </form>
        </div>
     </div>
     
      );
}

export default UpdateMovie;