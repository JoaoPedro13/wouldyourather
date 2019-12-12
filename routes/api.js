'use strict';
const Answer = require('./../models/answer');
const Question = require('./../models/question');
const { Router } = require('express');
const router = new Router();

//GET RANDOM QUESTION (falta ver se o user já respondeu a este ID)
router.get("/post/random", (req, res, next) => {
  res.send("random");

});

//GET QUESTION BY ID (falta ver se o user já respondeu a este ID)
router.get("/post/postId=:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    const retrievedQuestion = await Question.findById(req.params.id);
    console.log(retrievedQuestion);
    res.send(retrievedQuestion);
  } catch (error) { next(error); }

});

//POST ANSWER BY ID (falta ver se o user já respondeu a este ID)
router.post("/post/postId=:id", async (req, res, next) => {
  console.log(req.body);
  try {
    const insertedAnswer = await Answer.create({ questionID: req.params.id, option: req.body.option });
    console.log(insertedAnswer);
    res.send(insertedAnswer);
  } catch (error) { next(error); }
});



module.exports = router;