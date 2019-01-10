import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // DO SOME SIGN IN STUFF...
  }
  render() {
    return (
      <div className="container login">
        <h3>Login</h3>

        <form onSubmit={this.handleSubmit}>

        <div className="input-field">
          <label>Username:</label>
          <input type="text" id="username" onChange={this.handleChange} />
        </div>

        <div className="input-field">
          <label>Password:</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>

        <button className="btn">LOGIN</button>

        </form>
      </div>
      
    );
  }
}

export default Login;
