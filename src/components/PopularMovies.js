import React, { Component } from 'react';


// Components
import PopularMoviesList from './PopularMoviesList';




class PopularMovies extends Component {
  render() {
    return (
      <div className="popular-movies">
        <h2>Welcome, here are the most popular movies !</h2>
        <PopularMoviesList />
      </div>
    );
  }
}

export default PopularMovies;
