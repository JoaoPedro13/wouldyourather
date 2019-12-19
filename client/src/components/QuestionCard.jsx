import React, { Fragment, Component } from "react";

import { Icon } from "./Icon";
import { getAnswer, getQuestion } from "../services/contentServices";
import { Link, Redirect } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

export class QuestionCard extends Component {
  constructor(props) {
    super(props);

    this.getQuestionBackground = this.getQuestionBackground.bind(this);
  }
  getQuestionBackground() {
    switch (this.props.questionToDisplay.category) {
      case "heart":
        return "https://res.cloudinary.com/db1i5vxr8/image/upload/v1576757591/nespera%20pics/love_fyxufp.jpg";
        break;
      case "dollar":
        return "https://res.cloudinary.com/db1i5vxr8/image/upload/v1576757592/nespera%20pics/money_dggzcp.jpg";
        break;
      case "football":
        return "https://res.cloudinary.com/db1i5vxr8/image/upload/v1576757764/nespera%20pics/sports_uuotua.jpg";
        break;
      case "wrench":
        return "https://res.cloudinary.com/db1i5vxr8/image/upload/v1576757764/nespera%20pics/sports_uuotua.jpg";
        break;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.questionToDisplay && (
          <Fragment>
            <div
              class="jumbotron jumbotronquestion"
              style={{
                backgroundImage: `url(${this.getQuestionBackground()})`
              }}
            >
              <h1 class="display-5">Would You Rather?</h1>
              <div className="d-flex align-middle overjumbo">
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={true}
                >
                  <div className="btngroupquestion">
                    <Link
                      className="btn btn-outline-dark btnquestion"
                      onClick={this.props.handleAnswer}
                      to={"/post/stats/" + this.props.questionToDisplay._id}
                      name="option"
                      value="A"
                    >
                      {this.props.questionToDisplay.optionA}
                    </Link>
                    <Link
                      className="btn btn-outline-dark btnquestion"
                      name="option"
                      value="B"
                      onClick={this.props.handleAnswer}
                      to={"/post/stats/" + this.props.questionToDisplay._id}
                    >
                      {this.props.questionToDisplay.optionB}
                    </Link>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            </div>

            <footer>
              <h3>by {this.props.questionToDisplay.authorID.name}</h3>
              <small>
                {this.props.questionToDisplay.answers.length} answers
              </small>
            </footer>
          </Fragment>
        )}
      </div>
    );
  }
}

export default QuestionCard;
