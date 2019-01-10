import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPopularMoviesQuery } from '../queries/queries';

class PopularMoviesList extends Component {
  state = {
    selected: null,
  }
  displayMovies = () => {
    const data = this.props.data;
    const output = data.loading
      ? (<div>Loading movies... </div>)
      : data.popularMovies.results.map(movie => {
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

export default graphql(getPopularMoviesQuery)(PopularMoviesList);
