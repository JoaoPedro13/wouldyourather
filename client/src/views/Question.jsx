import React, { Fragment, Component } from "react";
import QuestionCard from "./../components/QuestionCard";
import { getQuestion, getRandomQuestion, sendAnswer } from "../services/contentServices";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null
    };
    this.callQuestion = this.callQuestion.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  async callQuestion() {
    const url = this.props.match.url;

    if (url === "/post/random") {
      const retrievedQuestion = await getRandomQuestion();
      this.setState({
        currentQuestion: retrievedQuestion
      });
    } else {
      const id = this.props.match.params.questionId;
      const retrievedQuestion = await getQuestion(id);
      this.setState({
        currentQuestion: retrievedQuestion
      });
    }
  }

  async handleAnswer(event) {
    //console.log(event.target.attributes.value.value);
    try {
      const sentAnswer = await sendAnswer(event.target.attributes.value.value, this.state.currentQuestion._id);
      //console.log(sentAnswer);
    } catch (error) {
      console.log(error);

    }

  }

  componentDidMount() {
    this.callQuestion();
  }

  render() {
    return (


      <QuestionCard questionToDisplay={this.state.currentQuestion} handleAnswer={this.handleAnswer} />

    );
  }
}

export default Question;
