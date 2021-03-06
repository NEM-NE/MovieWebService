import React from 'react';
import {Link} from 'react-router-dom'
import "./Movie.css";
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster, genres}) {
    return (
    <div className="movie">
        <Link to={{
            pathname:`/movie/${id}`,
            state:{
                year:year,
                title:title,
                summary:summary,
                poster:poster,
                genres:genres
            }
        }} >
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((gener, index) => (
                        <li className="genres" key={index}>{gener}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 140)}....</p>
            </div>
        </Link>
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