import React, { Component } from 'react'
import { edit, userInformation } from "./../services/authServices"
import { getAuthorQuestions } from "./../services/contentServices"
import { Link } from "react-router-dom"

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    if (!this.state.user) {
      try {
        const verifiedUser = await userInformation();
        this.setState({ user: verifiedUser });
        const userQuestions = await getAuthorQuestions(this.state.user._id);
        this.setState({ questions: userQuestions });
      }
      catch (error) {
        console.log(error); this.setState({ user: null })

      }

    }

  }


  handleChange = event => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = async e => {
    e.preventDefault();
    let user = this.state;
    console.log(user);
    try {
      user = await edit(user);
      // this.props.handleAuth(user);
      // this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="signup">
        <h1>My Profile</h1>
        {(this.state.user && <form onSubmit={this.formHandler} className="signup-form">
          <img src={this.state.user.picture} alt="user" />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.user.name}
          />



          <button>Update</button>
        </form>)}
        <h1>My Questions</h1>
        <ul>

          {this.state.questions && this.state.questions.map(question => <li>{question.title}</li>)
          }

        </ul>

        <Link>Create New</Link>
      </div>
    );
  }
}

export default Profile
