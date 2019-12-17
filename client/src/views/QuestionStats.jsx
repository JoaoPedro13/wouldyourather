import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { getQuestion } from "./../services/contentServices"
import Chart from "./../components/Chart"
import Share from '../components/Share';

export class QuestionStats extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestion: null }
    this.callQuestion = this.callQuestion.bind(this);
  }

  async callQuestion(id) {


    try {
      const retrievedQuestion = await getQuestion(id);
      //console.log(retrievedQuestion);

      this.setState({ currentQuestion: retrievedQuestion });

    }
    catch (error) { console.log(error); }
  }

  componentDidMount() {
    const questionId = this.props.match.params.questionId;
    this.callQuestion(questionId);



  }

  count

  render() {

    return (
      <div>
        <h1>Stats!</h1>
        {this.state.currentQuestion && <Fragment>
          <p>Created by {this.state.currentQuestion.authorID.name} in {this.state.currentQuestion.createdAt}</p>
          <p>Total answers: {this.state.currentQuestion.answers.length}</p>
          <p>{this.state.currentQuestion.optionA}:{this.state.currentQuestion.answers.filter(answer =>
            answer.option === "A"


          ).length}</p>
          <p>{this.state.currentQuestion.optionB}:{this.state.currentQuestion.answers.filter(answer =>
            answer.option === "B"


          ).length}</p>



          <Chart amountForA={this.state.currentQuestion.answers.filter(answer =>
            answer.option === "A"


          ).length} amountForB={this.state.currentQuestion.answers.filter(answer =>
            answer.option === "B"


          ).length} />
        </Fragment >}
        <Share id={this.props.match.params.questionId} />

        <Link to="/post/random">Another Question! </Link>
      </div>
    )
  }
}

export default QuestionStats
