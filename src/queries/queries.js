import { gql } from 'apollo-boost';

// QUERIES ------------------------------
const getPopularMoviesQuery = gql`
  {
    popularMovies(page: 1) {
      results {
        id
        title
        poster_path
      }
    }
  }
`
const getUpcomingMoviesQuery = gql`
  {
    upcomingMovies(page: 1) {
      results {
        id
        title
        poster_path
      }
    }
  }
`

export { getPopularMoviesQuery, getUpcomingMoviesQuery };