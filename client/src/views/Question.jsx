import React, { Fragment, Component } from "react";
import QuestionCard from "./../components/QuestionCard";
import { getQuestion, getRandomQuestion } from "../services/contentServices";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null
    };
    this.callQuestion = this.callQuestion.bind(this);
  }

  async callQuestion() {
    const url = this.props.match.url;

    if (url === "/post/random") {
      const retrievedQuestion = await getRandomQuestion();
      //console.log(retrievedQuestion);
      this.setState({
        currentQuestion: retrievedQuestion
      });
    } else {
      const id = this.props.match.params.questionId;
      const retrievedQuestion = await getQuestion(id);
      console.log("asd");
      this.setState({
        currentQuestion: retrievedQuestion
      });
    }
  }

  componentDidMount() {
    this.callQuestion();
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <Fragment>
        <header>
          <h1>Would You Rather</h1>
        </header>
        <QuestionCard questionToDisplay={this.state.currentQuestion} />
      </Fragment>
    );
  }
}

export default Question;
