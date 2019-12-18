import React, { Component } from "react";
import { login } from "../services/authServices";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = async e => {
    e.preventDefault();

    const insertedLogin = this.state;
    //console.log(user);
    try {
      const user = await login(insertedLogin);
      this.props.handleAuth(user);
      this.props.history.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
        <p>or <Link to="/signup">Sign-up</Link></p>
      </div>
    );
  }
}

export default Login;
