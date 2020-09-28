import React from 'react';
import axios from 'axios';
import Movie from '../componets/Movie';
import "./Home.css";
import PropTypes from 'prop-types';

class Home extends React.Component {  //it's class component...
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {  //리액트는 render를 한번만 로딩한다. 즉, 새로고침을 안해준다. 따라서 state를 최신화 시켜주기 위해서는 setState을 사용하여 state, render을 다시 사용하게 만들어준다.
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading 
          ? (
          <div className="loader">
            <div className="loader_Ani"></div>
            <span className="loader_text"><h2>Loading....</h2></span>
          </div>
          ): (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  title={movie.title} 
                  year={movie.year} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres} 
                />
              ))}
            </div>
          )}
      </section>
    )
  };
}
export default Home;