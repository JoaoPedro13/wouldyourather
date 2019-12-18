import React from "react";
import { Link } from "react-router-dom";
import TopQuestions from "../components/TopQuestions";
import logo from "./../nespera.png"



const Home = () => {

  return (
    <div className="col mx-auto">


      <div class="jumbotron" >
        <h1 class="display-3">Would <br />You<br /> Rather?</h1>

        <div className="d-flex justify-content-around align-middle overjumbo">

          <div className="btnmenu">

            <a className="btn btn-outline-dark menubtn" href="#" role="button">Random Dilema</a>
            <a className="btn btn-outline-dark menubtn " href="#" role="button">Create New</a>

          </div>


        </div>
      </div>

      <TopQuestions />
      <p>  <i>"Life is the art of choice"</i>   </p>
    </div >
  );
};

export default Home;
