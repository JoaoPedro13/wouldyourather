import React, { Fragment, Component } from "react";
import { getQuestion } from "../services/contentServices";
import QuestionStatsComponent from "./../components/QuestionStatsComponent";
import { Link } from "react-router-dom";
import Share from "../components/Share";

export class QuestionStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToDisplay: null
    };
    this.callQuestion = this.callQuestion.bind(this);
    this.getQuestionBackground = this.getQuestionBackground.bind(this);
  }

  getQuestionBackground() {
    switch (this.state.questionToDisplay.category) {
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

  async callQuestion() {
    const id = this.props.match.params.questionId;
    const retrievedQuestion = await getQuestion(id);
    this.setState({
      questionToDisplay: retrievedQuestion
    });
  }

  componentDidMount() {
    this.callQuestion();
  }

  render() {
    return (
      <div>
        {this.state.questionToDisplay && (
          <div>
            <div className="container-fluid">
              {this.state.questionToDisplay && (
                <div className="col-auto">
                  <div
                    className="jumbotron jumbotronStats"
                    style={{
                      backgroundImage: `url(${this.getQuestionBackground()})`
                    }}
                  >
                    <h1 className="display-5">Would You Rather?</h1>
                    <div className="anotherBtn">
                      <Link
                        className="btn btn-ouline-dark btnquestion"
                        to="/post/random"
                      >
                        Another Question!
                      </Link>
                    </div>
                  </div>
                  <div className="afterJumboStats">
                    <div>
                      <h3>by {this.state.questionToDisplay.authorID.name}</h3>
                      <small>
                        {this.state.questionToDisplay.answers.length} answers
                      </small>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Fragment>
              <div className="stats">
                <QuestionStatsComponent
                  questionToDisplay={this.state.questionToDisplay}
                />
              </div>
              <Share id={this.state.questionToDisplay._id} />
            </Fragment>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionStats;
