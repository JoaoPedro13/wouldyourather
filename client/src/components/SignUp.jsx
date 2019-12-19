import React, { Component, Fragment } from "react";
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

    try {
      user = await signUp(user);
      console.log(user);

      this.props.handleAuth(user);
      this.props.history.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container forms signup ">
          <form onSubmit={this.formHandler}>
            <div className="form-row d-flex justify-content-center">
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Name"
                  className="form-control mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                />
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Email
                </label>
                <input
                  type="email"
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
                <button className="btn btn-outline-dark">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
