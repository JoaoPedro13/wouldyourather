import React, { Component } from "react";
//import { Icon } from "./Icon";
//import { getAnswer, getQuestion } from "../services/contentServices";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
//import { QuestionStats } from "./../views/QuestionStats";

export class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.questionToDisplay
    };

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

  componentDidMount() {
    this.setState({
      question: this.props.questionToDisplay
    });
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
                  {!this.props.userAnswered && (
                    <div className="btngroupquestion">
                      <Link
                        className="btn btn-outline-dark btnquestion"
                        onClick={this.props.handleAnswer}
                        name="option"
                        value="A"
                        to={"/post/stats/" + this.props.questionToDisplay._id}
                      >
                        {this.props.questionToDisplay.optionA}
                      </Link>
                      <Link
                        className="btn btn-outline-dark btnquestion"
                        name="option"
                        value="B"
                        to={"/post/stats/" + this.props.questionToDisplay._id}
                        onClick={this.props.handleAnswer}
                      >
                        {this.props.questionToDisplay.optionB}
                      </Link>
                    </div>
                  )}
                </ReactCSSTransitionGroup>
              </div>
            </div>

            <footer>
              <h3>by {this.props.questionToDisplay.authorID.name}</h3>
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
