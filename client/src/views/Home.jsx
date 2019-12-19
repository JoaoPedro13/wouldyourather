import React from "react";
import { Link } from "react-router-dom";
import TopQuestions from "../components/TopQuestions";
import logo from "./../nespera.png"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6



const Home = () => {

  return (
    < div className="col">


      <div class="jumbotron" >
        <h1 class="display-3">Would <br />You<br /> Rather?</h1>

        <div className="d-flex justify-content-around align-middle overjumbo">

          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}>

            <div className="btnmenu">

              <a className="btn btn-outline-dark menubtn" href="#" role="button">Random Dilema</a>
              <a className="btn btn-outline-dark menubtn " href="#" role="button">Create New</a>

            </div>



          </ReactCSSTransitionGroup>


        </div>
      </div>

      <TopQuestions />
      <p className="tagline">"Life is the art of choice"</p>
    </div >
  );
};

export default Home;
