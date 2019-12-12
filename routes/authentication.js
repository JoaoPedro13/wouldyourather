"use strict";

const { Router } = require("express");

const bcryptjs = require("bcryptjs");
const User = require("./../models/user");
const uploader = require("./../middleware/upload");

const router = new Router();

router.post("/sign-up", uploader.single("picture"), (req, res, next) => {
  const { name, email, password } = req.body;
  const picture = req.file ? req.file.url : "cloudinary picture url";
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        name,
        email,
        passwordHash: hash,
        picture
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/sign-in", (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then(document => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error("Wrong password."));
      }
    })
    .catch(error => {
      next(error);
    });
});

router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
