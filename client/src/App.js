import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import "./App.css";

import Question from "./views/Question";
import Home from "./views/Home";
import Profile from "./views/Profile";
import CreateQuestion from "./views/CreateQuestion";
import EditQuestion from "./views/EditQuestion";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

import { userInformation } from "./services/authServices";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.changeAuthStatus = this.changeAuthStatus.bind(this);
  }

  async componentDidMount() {
    if (!this.state.user) {
      try {
        const verifiedUser = await userInformation();
        this.setState({ user: verifiedUser });
      } catch (error) {
        console.log(error);
        this.setState({ user: null });
      }
    }
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

        <Switch>
          <Route path="/post/random" component={Question}></Route>
          <Route path="/post/create" component={CreateQuestion}></Route>
          <Route
            path={`/post/edit/:questionId`}
            component={EditQuestion}
          ></Route>

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

          <Route path="/profile" render={props => <Profile {...props} />} />

          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
