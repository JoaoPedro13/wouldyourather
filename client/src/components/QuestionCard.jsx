import React, { Fragment, Component } from "react";
import { Icon } from "./Icon"
import { getAnswer } from "../services/contentServices";
import { Link, Redirect } from "react-router-dom"

export class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "",
      questionID: "",
      userAnswered: false,
    };

    this.selectOption = this.selectOption.bind(this);
    this.answer = this.answer.bind(this);
  }

  selectOption(event) {

    const questionID = this.props.questionToDisplay._id;
    this.setState({
      option: event.target.value,
      questionID, userAnswered: true,
    });

  }

  componentDidUpdate() {

    if (this.state.userAnswered) {
      this.answer();
      this.props.history.push("/post/stats/" + this.state.questionID);
    }
  }

  async answer() {
    const questionID = this.state.questionID;
    const option = this.state.option;

    try {
      const answer = await getAnswer(option, questionID);

    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <div>
        {this.props.questionToDisplay && (
          <Fragment>
            <button
              onClick={event => this.selectOption(event)}
              name="option"
              value="A"

            >
              {this.props.questionToDisplay.optionA}
            </button>

            <br />
            <Icon category={this.props.questionToDisplay.category} />

            <br />

            <button
              onClick={event => this.selectOption(event)}
              name="option"
              value="B"

            >
              {this.props.questionToDisplay.optionB}
            </button>

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
