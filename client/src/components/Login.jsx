import React, { Component, Fragment } from "react";
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
      <Fragment>
        <div className="container forms">
          <form onSubmit={this.formHandler}>
            <div className="form-row ">
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                  className="form-control mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                />
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  className="form-control mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-dark">Log In</button>
              </div>
            </div>
          </form>
        </div>
        <div className="container d-flex justify-content-center signinLink">
          <p>
            or <Link to="/signup">Sign-up</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Login;
