import React, { Fragment, Component } from "react";
import { Icon } from "./Icon"
import { Link } from "react-router-dom";

export class QuestionCard extends Component {
  constructor(props) {
    super(props);



  }



  render() {
    return (
      <div>
        {this.props.questionToDisplay && (
          <Fragment>
            <Link onClick={this.props.handleAnswer}
              to={"/post/stats/" + this.props.questionToDisplay._id}
              name="option"
              value="A"

            >
              {this.props.questionToDisplay.optionA}
            </Link>

            <br />
            <Icon category={this.props.questionToDisplay.category} />

            <br />

            <Link

              name="option"
              value="B"
              onClick={this.props.handleAnswer}
              to={"/post/stats/" + this.props.questionToDisplay._id}


            >
              {this.props.questionToDisplay.optionB}
            </Link>

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
