import React from "react";
import Movie from "../components/Movie/Movie";

const Movies = ({ movies }) => {

    return (
        <div className="row">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
          <div className="col-12"></div>
        </div>
      );
};

export default Movies;