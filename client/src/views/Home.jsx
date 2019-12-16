import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home View!</h1>
      <Link to="/post/random">Random Question</Link>
      <Link to="/post/top">Top Questions</Link>
      <Link to="/post/create">Create your own</Link>
    </div>
  );
};

export default Home;
