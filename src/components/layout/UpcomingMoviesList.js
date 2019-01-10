import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getUpcomingMoviesQuery } from '../../queries/queries';

class UpcomingMoviesList extends Component {
  state = {
    selected: null, // I wanted to show details about selected movies, ... no time here too
  }

  displayMovies = () => {
    const data = this.props.data;
    const output = data.loading
      ? (<div>Loading movies... </div>)
      : data.upcomingMovies.results.map(movie => {
          // Construction de l'url de l'image
          const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        return (
          <li key={movie.id} onClick={(e) => {this.setState({selected: movie.id})}}>
            <img src={posterUrl} alt={movie.title} height={200} width="auto" />
          </li>
        );
      });
    return output;
  }

  render() {
    return (
      <div>
        <ul id="movies-list">
          {this.displayMovies()}
        </ul>
      </div>
    );
  }
}

export default graphql(getUpcomingMoviesQuery)(UpcomingMoviesList);
