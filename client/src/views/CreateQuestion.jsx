import React, { Component } from "react";
import { createQuestion as create } from "../services/contentServices";

export class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      optionA: "",
      optionB: "",
      category: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = async e => {
    e.preventDefault();

    try {
      await create(this.state);
      this.props.history.push(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formHandler} className="createQuestion-form">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              className="form-control mb-2 mr-sm-2"
            />
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              optionA
            </label>
            <input
              type="text"
              id="optionA"
              name="optionA"
              onChange={this.handleChange}
              className="form-control mb-2 mr-sm-2"
            />
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              optionB
            </label>
            <input
              type="text"
              id="optionB"
              name="optionB"
              onChange={this.handleChange}
              className="form-control mb-2 mr-sm-2"
            />
          </div>
          <div className="col-auto">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
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
            <button className="btn btn-outline-dark">Create a dilema</button>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateQuestion;
