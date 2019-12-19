import React, { Fragment, Component } from "react";

import { Icon } from "./Icon";
import { getAnswer, getQuestion } from "../services/contentServices";
import { Link, Redirect } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
import { QuestionStats } from "./../views/QuestionStats"


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
          <div className="col-auto">
            <div
              className="jumbotron jumbotronquestion"
              style={{
                backgroundImage: `url(${this.getQuestionBackground()})`
              }}
            >
              <h1 className="display-5">Would You Rather?</h1>
              <div className="d-flex align-middle overjumbo">
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={true}
                >
                  {!this.props.userAnswered && (<div className="btngroupquestion">
                    <button
                      className="btn btn-outline-dark btnquestion"
                      onClick={this.props.handleAnswer}

                      name="option"
                      value="A"
                    >
                      {this.props.questionToDisplay.optionA}
                    </button>
                    <button
                      className="btn btn-outline-dark btnquestion"
                      name="option"
                      value="B"
                      onClick={this.props.handleAnswer}

                    >
                      {this.props.questionToDisplay.optionB}
                    </button>
                  </div>)}
                </ReactCSSTransitionGroup>
              </div>
            </div>

            <footer className="col-auto">
              <h3 >by {this.props.questionToDisplay.authorID.name}</h3>
              <small>
                {this.props.questionToDisplay.answers.length} answers
              </small>
            </footer>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionCard;
