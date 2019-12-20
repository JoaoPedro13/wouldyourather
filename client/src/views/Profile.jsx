import React, { Component } from "react";
import { edit } from "./../services/authServices";
import { getAuthorQuestions } from "./../services/contentServices";
import { Link } from "react-router-dom";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.picture = this.props.user.picture.split("/");
  }

  async componentDidMount() {
    this.setState({ user: this.props.user });
    const questionsFromAPI = await getAuthorQuestions(this.props.user._id);
    this.setState({ questions: questionsFromAPI });
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
      <div className="container">
        <div className="jumbotron jumbotronquestion col-auto">
          <img
            src={
              "https://res.cloudinary.com/db1i5vxr8/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/profile.png"
            }
            alt="profile avatar"
          ></img>
          {/* <img
            src={
              "https://res.cloudinary.com/db1i5vxr8/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/" +
              this.picture[this.picture.length - 1]
            } alt='profile avatar'
          ></img> */}
          <h1 className="display-5">{this.props.user.name}</h1>
          <div className="d-flex align-middle overjumbo"></div>
        </div>
        <div className="col-auto">
          <h3 style={{ margin: "5%" }}>My Dilemmas</h3>
          <ul className="list-group">
            {this.state.questions &&
              this.state.questions.map(question => (
                <Link
                  className="list-group-item "
                  key={question._id}
                  to={`post/edit/${question._id}`}
                >
                  <li className="d-flex justify-content-between align-items-center">
                    {question.title}
                    <span className="badge badge-primary badge-pill">
                      {question.answers.length}
                    </span>
                  </li>
                </Link>
              ))}
          </ul>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-ouline-dark btnquestion" to="/post/create">
              Create New
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
