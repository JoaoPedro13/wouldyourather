import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Question from "./views/Question";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.changeAuthStatus = this.changeAuthStatus.bind(this);
  }

  changeAuthStatus(user) {
    console.log();
    this.setState({
      user: user
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar user={this.state.user} handleAuth={this.changeAuthStatus} />
        {/* <button onClick={logOut}>logout</button> */}
        <Link to="/post/random/"> Random </Link>
        <Switch>
          <Route path="/post/random/" component={Question}></Route>
          <Route path="/post/:questionId" component={Question}></Route>
          <Route
            path="/login"
            render={props => (
              <Login {...props} handleAuth={this.changeAuthStatus} />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <SignUp {...props} handleAuth={this.changeAuthStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
