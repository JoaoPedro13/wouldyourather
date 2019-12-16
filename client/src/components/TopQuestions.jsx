import React, { Component, Fragment } from "react";
import { getTopQuestions } from "./../services/contentServices";
import { Link } from "react-router-dom";

export class TopQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { topList: "" };
    this.getTop = this.getTop.bind(this);
  }

  async getTop() {
    try {
      const retrievedTopQuestions = await getTopQuestions();
      console.log(retrievedTopQuestions.data);
      this.setState({ topList: retrievedTopQuestions.data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTop();
  }

  render() {
    return (
      <Fragment>
        <h3>Most Popular Questions</h3>
        <ol>
          {this.state.topList &&
            this.state.topList.map(question => (
              <Link to={"/post/" + question._id}>
                <li>{question.title}</li>
              </Link>
            ))}
        </ol>
      </Fragment>
    );
  }
}

export default TopQuestions;
