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
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>

        <div className="field">
          <label>Username:</label>
          <input type="text" id="username" placeholder="username" onChange={this.handleChange} />
        </div>

        <div className="field">
          <label>Password:</label>
          <input type="password" id="password" placeholder="password" onChange={this.handleChange} />
        </div>

        <button>LOGIN</button>

        </form>
      </div>
      
    );
  }
}

export default Login;
