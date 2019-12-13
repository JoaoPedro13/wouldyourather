import React, { Component } from "react";
import { signUp } from "../services/authServices";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };
  }

  handleChange = event => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = async e => {
    e.preventDefault();
    let user = this.state;
    console.log(user);
    try {
      user = await signUp(user);
      this.props.handleAuth(user);
      this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.formHandler} className="signup-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
