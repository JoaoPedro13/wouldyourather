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
    const id = this.props.match.params.id;

    console.log("oi", id);
    if (id === "random") {
      const retrievedQuestion = await getRandomQuestion();
      //console.log(retrievedQuestion);
      this.setState({
        currentQuestion: retrievedQuestion
      });
    }
    else {
      const retrievedQuestion = await getQuestion(id);
      //console.log(retrievedQuestion);
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
