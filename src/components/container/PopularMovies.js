import React, { Component } from 'react';

// Components
import PopularMoviesList from '../layout/PopularMoviesList';

class PopularMovies extends Component {
  render() {
    return (
      <div className="popular-movies container">
        <h3>Welcome, here are the most popular movies !</h3>
        <PopularMoviesList />
      </div>
    );
  }
}

export default PopularMovies;
