import React, { Component } from 'react';

// Components
import UpcomingMoviesList from '../layout/UpcomingMoviesList';

class UpcomingMovies extends Component {
  render() {
    return (
        <div className="upcoming-movies container">
          <h3>Welcome, here are the upcoming movies !</h3>
          <UpcomingMoviesList />
        </div>
    );
  }
}

export default UpcomingMovies;
