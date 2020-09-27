import React from 'react';
import "./Movie.css";
import PropTypes from 'prop-types';

function Movie({title, year, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h4 className="movie_title">{title}</h4>
            <h5 className="movie_year">{year}</h5>
            <ul className="geners">
                {genres.map((gener, index) => (
                    <li className="movie_genres" key={index}>{gener}</li>
                ))}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;