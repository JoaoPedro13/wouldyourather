import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Question from "./views/Question";
import Home from "./views/Home";
import Profile from "./views/Profile";
import CreateQuestion from "./views/CreateQuestion";
import EditQuestion from "./views/EditQuestion";
import QuestionStats from "./views/QuestionStats";
import About from "./views/About";

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
        <Switch>
          <Route exact path="/post/random" component={Question}></Route>
          <Route
            path="/post/create"
            render={props =>
              this.state.user ? (
                <CreateQuestion {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path={`/post/stats/:questionId`}
            component={QuestionStats}
          ></Route>
          <Route
            path={`/post/edit/:questionId`}
            component={EditQuestion}
          ></Route>
          <Route path="/about" component={About}></Route>

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

          <Route
            path="/profile"
            render={props =>
              this.state.user ? (
                <Profile {...props} user={this.state.user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
