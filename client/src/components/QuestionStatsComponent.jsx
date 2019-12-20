import React, { Component, Fragment } from "react";
import Chart from "./Chart";
import MetaTags from "react-meta-tags";

export class QuestionStats extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestion: null };
  }

  componentDidMount() {
    this.setState({
      currentQuestion: this.props.questionToDisplay
    });
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <meta
            id="description"
            name="description"
            content="world's best dilemmas"
          />
          <meta id="ogtitle" property="og:title" content="would you rather" />
          <meta
            id="ogdescription"
            property="og:description"
            content="world's best dilemmas"
          />
          <meta
            id="ogimage"
            property="og:image"
            content="https://res.cloudinary.com/db1i5vxr8/image/upload/v1576674314/nespera%20pics/ASD_j2cv0w.png"
          />
          <meta id="ogtype" property="og:type" content="website" />
        </MetaTags>

        <div className="container">
          {this.props.questionToDisplay && (
            <div className="col-auto">
              {/*             <p>Created by {this.props.questionToDisplay.authorID.name} in {this.props.questionToDisplay.createdAt}</p>
               */}

              <Chart
                optionA={this.props.questionToDisplay.optionA}
                optionB={this.props.questionToDisplay.optionB}
                amountForA={
                  this.props.questionToDisplay.answers.filter(
                    answer => answer.option === "A"
                  ).length
                }
                amountForB={
                  this.props.questionToDisplay.answers.filter(
                    answer => answer.option === "B"
                  ).length
                }
              />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default QuestionStats;
