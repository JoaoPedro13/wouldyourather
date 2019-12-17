import React from "react";
import { Link } from "react-router-dom";
import TopQuestions from "../components/TopQuestions";

const Home = () => {
  return (
    <div>
      <h1>Home View!</h1>
      <Link to="/post/random">Random Question</Link>

      <Link to="/post/create">Create your own</Link>
      <TopQuestions />

    </div>
  );
};

export default Home;
