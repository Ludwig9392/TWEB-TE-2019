import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import Navbar from './components/layout/Navbar';
import Login from './components/container/Login';
import UpcomingMovies from './components/container/UpcomingMovies';
import PopularMovies from './components/container/PopularMovies';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://graphql-tmdb.herokuapp.com/graphql',
  headers: {
    // a mettre dans un .env ...(pas eu le temps pour finir T.T)
    authorization: "f1be4bafe6f7cb0cb84f5948c5b75497",
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={PopularMovies} />
              <Route path="/upcoming" component={UpcomingMovies} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
