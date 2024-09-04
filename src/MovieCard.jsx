import React from 'react';

const MovieCard = ({ movieData }) => {
    return (
        <div className="movie" key={movieData.imdbID}>
            <div>
                <p>{movieData.Year}</p>
            </div>
            <div>
                <img src={movieData.Poster !== 'N/A' ? movieData.Poster : 'http://via.placeholder.com/404'} alt="Movie poster" />
            </div>
            <div>
                <span>{movieData.Type}</span>
                <h3>{movieData.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard