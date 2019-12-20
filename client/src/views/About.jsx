import React from "react";
import gitLogo from "../github.png";

function About() {
  return (
    <div className="container about">
      <h1>Made by:</h1>
      <div className="container about-elements">
        <div className="about-element btn btn-outline-dark btnquestion">
          <a href="https://github.com/JoaoPedro13">
            <img src={gitLogo} alt="github" />
            <h4>João Pedro Caldeira</h4>
          </a>
        </div>
        <div className="about-element btn btn-outline-dark btnquestion">
          <a href="https://github.com/zemariagp">
            <img src={gitLogo} alt="github" />
            <h4>José Maria Pereira</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
