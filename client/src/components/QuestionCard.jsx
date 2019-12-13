import React, { Fragment, Component } from "react";
import { Icon } from "./Icon"
import { getAnswer } from "../services/contentServices";

export class QuestionCard extends Component {
  constructor() {
    super();
    this.state = {
      option: "",
      questionID: ""
    };

    this.selectOption = this.selectOption.bind(this);
    this.answer = this.answer.bind(this);
  }

  selectOption(event) {
    const questionID = this.props.questionToDisplay._id;
    this.setState({
      option: event.target.value,
      questionID
    });
  }

  async answer() {
    const questionID = this.state.questionID;
    const option = this.state.option;
    console.log(questionID);
    console.log(option);
    try {
      const answer = await getAnswer(option, questionID);
      console.log(answer);
      console.log(this.props.questionToDisplay);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option !== this.state.option) {
      this.answer();
      console.log("PREVPROPS", prevProps);
      console.log("PROPS", this.props);
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
