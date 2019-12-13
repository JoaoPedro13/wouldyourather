import React, { Fragment, Component } from "react";
import QuestionCard from "./../components/QuestionCard";
import { getRandomQuestion } from "../services/contentServices";

export class Question extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: null
    };
    this.callRandom = this.callRandom.bind(this);
  }

  async callRandom() {
    const retrievedQuestion = await getRandomQuestion();
    //console.log(retrievedQuestion);
    this.setState({
      currentQuestion: retrievedQuestion
    });
  }

  componentDidMount() {
    this.callRandom();
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
