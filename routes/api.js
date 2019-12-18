"use strict";
const Answer = require("./../models/answer");
const Question = require("./../models/question");
const { Router } = require("express");
const router = new Router();
const routeGuard = require("./../middleware/route-guard");

//GET RANDOM QUESTION (falta ver se o user já respondeu a este ID)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

router.get("/top", async (req, res, next) => {
  try {
    const retrievedQuestions = await Question.find();
    const sortedQuestions = retrievedQuestions.sort((questionA, questionB) =>
      questionA.answers.length >= questionB.answers.length ? -1 : 1
    );

    console.log(sortedQuestions.splice(5, sortedQuestions.length));
    res.json(sortedQuestions);
  } catch (error) {
    next(error);
  }
});

router.get("/random", async (req, res, next) => {
  try {
    //const count = await Question.countDocuments().exec();
    const retrievedQuestions = await Question.find({
      _id: { $nin: req.session.responded }
    })
      .populate("authorID")
      .exec();
    const random = randomNumber(0, retrievedQuestions.length - 1);
    res.json(retrievedQuestions[random]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// CREATE QUESTION (ROUTEGUARDED)
router.post("/create", routeGuard, async (req, res, next) => {
  const { optionA, optionB, category, title } = req.body;
  const authorID = req.session.user;
  try {
    const insertedQuestion = await Question.create({
      optionA,
      optionB,
      category,
      title,
      authorID
    });
    console.log(insertedQuestion);
    res.send(insertedQuestion);
  } catch (error) {
    next(error);
  }
});

router.post("/edit/:id", routeGuard, async (req, res, next) => {
  const { optionA, optionB, category, title } = req.body;
  const currentUser = req.session.user;
  const currentQuestion = req.params.id;

  try {
    const insertedQuestion = await Question.findOneAndUpdate(
      { AuthorID: currentUser, _id: currentQuestion },
      {
        optionA,
        optionB,
        category,
        title
      }
    );
    console.log(insertedQuestion);
    res.send(insertedQuestion);
  } catch (error) {
    next(error);
  }
});

//GET QUESTION BY ID (falta ver se o user já respondeu a este ID)
router.get("/:id", async (req, res, next) => {
  // console.log(req.params.id, "here");
  try {
    const retrievedQuestion = await Question.findById(req.params.id).populate(
      "authorID answers"
    );
    console.log("QUESTION", retrievedQuestion);

    res.send(retrievedQuestion);
  } catch (error) {
    next(error);
  }
});

//TODO: Check if anything missing -> If the ID is in the url it will show for both random and non-random
router.post("/:id", async (req, res, next) => {
  // req.session.responded.push(req.params.id);
  req.session.responded = [...(req.session.responded || []), req.params.id];
  console.log(req.body.option, req.session);
  try {
    const insertedAnswer = await Answer.create({
      questionID: req.params.id,
      option: req.body.option
    });
    const relatedQuestion = await Question.findByIdAndUpdate(req.params.id, {
      $push: { answers: insertedAnswer._id }
    });
    console.log(
      "InsertedAnswer----->",
      insertedAnswer,
      "RelatedQuestion----->",
      relatedQuestion
    );

    res.send(insertedAnswer);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// SHOW LIST OF N QUESTIONS

/* router.get("/:num", async (req, res, next) => {
  const howManyDocs = Number.parseInt(req.params.num);

  try {
    const retrievedQuestions = await Question.find().limit(howManyDocs);
    console.log(retrievedQuestions);
    res.json(retrievedQuestions);
  } catch (error) {
    next(error);
  }
});
 */
//SHOW ALL QUESTIONS BY AUTHOR ID

router.get("/byauthor/:id", async (req, res, next) => {
  const authorID = req.params.id;

  try {
    const retrievedQuestions = await Question.find({ authorID: authorID });
    console.log(retrievedQuestions);
    res.json(retrievedQuestions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
