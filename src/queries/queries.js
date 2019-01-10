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


// MUTATIONS -----------------------------
const addBookMutation = gql`
  mutation ($name:String!, $genre:String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export { getPopularMoviesQuery, getUpcomingMoviesQuery, addBookMutation };