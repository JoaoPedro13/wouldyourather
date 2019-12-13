import React, { Fragment, Component } from "react";
import { getAnswer } from "../services/contentServices";

export class QuestionCard extends Component {
  constructor() {
    super();
    this.state = {
      option: "",
      questionId: ""
    };

    this.selectOption = this.selectOption.bind(this);
    this.answer = this.answer.bind(this);
  }

  selectOption(event) {
    const questionId = this.props.questionToDisplay._id;
    this.setState({
      option: event.target.value,
      questionId
    });
  }

  async answer() {
    const questionId = this.state.questionId;
    const option = this.state.option;
    console.log(questionId);
    console.log(option);
    try {
      const answer = await getAnswer(option, questionId);
      console.log(answer);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    this.answer();
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
            {/* <img src={this.props.questionToDisplay.category} alt="category-icon" /> */}
            <p>{this.props.questionToDisplay.category}</p>
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
