import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { getQuestion } from "./../services/contentServices"
import Chart from "./../components/Chart"
import Share from '../components/Share';
import MetaTags from 'react-meta-tags';



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

    this.setState({ currentQuestion: this.props.questionToDisplay })
    const questionId = this.state.currentQuestion._id;
    this.callQuestion(questionId);



  }

  count

  render() {

    return (
      <Fragment>
        <MetaTags>

          <meta id="description" name="description" content="world's best dilemmas" />
          <meta id="ogtitle" property="og:title" content="would you rather" />
          <meta id="ogdescription" property="og:description" content="world's best dilemmas" />
          <meta id="ogimage" property="og:image"
            content="https://res.cloudinary.com/db1i5vxr8/image/upload/v1576674314/nespera%20pics/ASD_j2cv0w.png" />
          <meta id="ogtype" property="og:type" content="website" />

        </MetaTags>

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


          <Link to="/post/random">Another Question! </Link>
        </div>
      </Fragment>
    )
  }
}

export default QuestionStats
