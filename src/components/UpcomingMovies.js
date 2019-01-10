import React, { Component } from 'react';


// Components
import UpcomingMoviesList from './UpcomingMoviesList';


class UpcomingMovies extends Component {
  render() {
    return (
        <div className="upcoming-movies">
          <h2>Welcome, here are the upcoming movies !</h2>
          <UpcomingMoviesList />
        </div>
    );
  }
}

export default UpcomingMovies;
