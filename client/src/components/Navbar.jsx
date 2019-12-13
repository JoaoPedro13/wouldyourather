import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../services/authServices";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  async handleSignOut() {
    logOut();
    await this.props.handleAuth(null);
  }
  render() {
    return (
      <nav>
        {(this.props.user && (
          <Fragment>
            <Link onClick={this.handleSignOut} to="/">
              Log Out
            </Link>
          </Fragment>
        )) || (
          <Fragment>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </Fragment>
        )}
      </nav>
    );
  }
}

export default Navbar;
