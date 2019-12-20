import React, { Component } from "react";
import { editQuestion as edit } from "../services/contentServices";
import {
  getQuestion,
  deleteQuestionAndAnswers
} from "../services/contentServices";

export class EditQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      optionA: "",
      optionB: "",
      category: ""
    };
    this.callQuestion = this.callQuestion.bind(this);
  }

  componentDidMount() {
    this.callQuestion();
  }

  async callQuestion() {
    const id = this.props.match.params.questionId;
    const retrievedQuestion = await getQuestion(id);
    console.log(retrievedQuestion);
    const { title, optionA, optionB, category } = retrievedQuestion;
    this.setState({
      title,
      optionA,
      optionB,
      category,
      id
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDelete = async () => {
    try {
      await deleteQuestionAndAnswers(this.state.id);
      this.props.history.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  formHandler = async e => {
    e.preventDefault();
    try {
      console.log("editing");
      await edit(this.state);
      this.props.history.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <h2 className="col-auto editQuestion-title">Edit your Dilemma</h2>
        <div>
          <form onSubmit={this.formHandler} className="createQuestion-form">
            <div className="col-auto">
              <label>Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                className="form-control mb-2 mr-sm-2"
                value={this.state.title}
              />
            </div>
            <div className="col-auto">
              <label>optionA</label>
              <input
                type="text"
                id="optionA"
                name="optionA"
                onChange={this.handleChange}
                className="form-control mb-2 mr-sm-2"
                value={this.state.optionA}
              />
            </div>
            <div className="col-auto">
              <label>optionB</label>
              <input
                type="text"
                id="optionB"
                name="optionB"
                onChange={this.handleChange}
                className="form-control mb-2 mr-sm-2"
                value={this.state.optionB}
              />
            </div>
            <div className="col-auto">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    category
                  </label>
                </div>
                <select
                  name="category"
                  onChange={this.handleChange}
                  value={this.state.category}
                  className="custom-select"
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option value="heart">Love</option>
                  <option value="football">Sports</option>
                  <option value="wrench">Work</option>
                  <option value="dollar">Money</option>
                </select>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-dark edit-buttons">
                Edit dilemma
              </button>
            </div>
          </form>
          <div className="col-auto">
            <button
              className="btn btn-outline-dark edit-buttons"
              onClick={this.handleDelete}
            >
              Delete this dilemma
            </button>
          </div>
        </div>
        <div className="col-auto"></div>
      </div>
    );
  }
}

export default EditQuestion;
