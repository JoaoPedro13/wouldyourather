import React, { Component } from "react";
import { editQuestion as edit } from "../services/contentServices";
import { getQuestion } from "../services/contentServices";

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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  async callQuestion() {
    const id = this.props.match.params.questionId;
    console.log("oi");
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
      <div>
        <h1>Edit!</h1>
        <form onSubmit={this.formHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label htmlFor="optionA">optionA</label>
          <input
            type="text"
            id="optionA"
            name="optionA"
            onChange={this.handleChange}
            value={this.state.optionA}
          />

          <label htmlFor="optionB">optionB</label>
          <input
            type="text"
            id="optionB"
            name="optionB"
            onChange={this.handleChange}
            value={this.state.optionB}
          />
          <label htmlFor="category">category</label>
          <select
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
          >
            <option>heart</option>
            <option>football</option>
            <option>wrench</option>
            <option>dolar</option>
          </select>

          <button>Update your dilema</button>
        </form>
      </div>
    );
  }
}

export default EditQuestion;
