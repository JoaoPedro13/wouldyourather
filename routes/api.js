'use strict';
const Answer = require('./../models/answer');
const Question = require('./../models/question');
const { Router } = require('express');
const router = new Router();
const routeGuard = require("./../middleware/route-guard");

//GET RANDOM QUESTION (falta ver se o user já respondeu a este ID)
router.get("/post/random", async (req, res, next) => {

  try {
    const count = await Question.countDocuments().exec();
    console.log(count);
    const random = Math.floor(Math.random() * count);
    const retrievedQuestions = await Question.findOne().skip(random).exec();
    res.json(retrievedQuestions);
  } catch (error) {
    next(error);
  }
});

//GET QUESTION BY ID (falta ver se o user já respondeu a este ID)
router.get("/post/postId=:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    const retrievedQuestion = await Question.populate(req.params.id);
    console.log(retrievedQuestion);

    res.send(retrievedQuestion);
  } catch (error) { next(error); }

});

//POST ANSWER BY ID (falta ver se o user já respondeu a este ID)
router.post("/post/postId=:id", async (req, res, next) => {
  console.log(req.body);
  try {
    const insertedAnswer = await Answer.create({ questionID: req.params.id, option: req.body.option });
    const relatedQuestion = await Question.findByIdAndUpdate(req.params.id, { $push: { answers: insertedAnswer._id } });
    console.log(insertedAnswer, relatedQuestion);

    res.send(insertedAnswer);
  } catch (error) { next(error); }
});

// CREATE QUESTION (ROUTEGUARDED)

router.post("/post/create", routeGuard, async (req, res, next) => {
  const { optionA, optionB, category } = req.body;
  const authorID = req.session.user;
  try {
    const insertedQuestion = await Question.create({ optionA, optionB, category, authorID });
    console.log(insertedQuestion);
    res.send(insertedQuestion);
  } catch (error) {
    next(error);
  }
});

// SHOW LIST OF N QUESTIONS 

router.get("/post/show=:num", async (req, res, next) => {
  const howManyDocs = Number.parseInt(req.params.num);

  try {
    const retrievedQuestions = await Question.find().limit(howManyDocs);
    console.log(retrievedQuestions);
    res.json(retrievedQuestions);
  } catch (error) {
    next(error);
  }
});




module.exports = router;