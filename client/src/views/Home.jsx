import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Home View!</h1>
      <Link to="/">Random Question</Link>
      <Link to="/">Top Questions</Link>
      <Link to="/">Create your own</Link>
    </div>
  )
}

export default Home
