"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("./../models/user");
const bcryptjs = require("bcryptjs");
const imgUploader = require("./../middleware/multer-configuration");

router.post("/login", async (req, res, next) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  try {
    console.log("username", email);
    const user = await User.findOne({ email }).exec();
    console.log("user", user);
    if (!user) throw new Error("Username not found bro");

    const matchesPassword = await bcryptjs.compare(password, user.passwordHash);
    console.log("matchPass", matchesPassword);
    if (!matchesPassword) throw new Error("Wrong password bro");
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    console.log("error caught here");
    next(error);
  }
});

router.post("/signup", imgUploader.single("image"), async (req, res, next) => {
  console.log("req", req.body);
  const { name, email, password } = req.body;
  const picture = req.file
    ? req.file.url
    : "https://res.cloudinary.com/db1i5vxr8/image/upload/v1575997473/sample.jpg";
  try {
    const passwordHash = await bcryptjs.hash(password, 10);
    if (!passwordHash) throw new Error("Wrong Password");
    const newUser = await User.create({ name, passwordHash, email, picture });
    if (!newUser) throw new Error("Wrong email");
    req.session.user = newUser._id;
    console.log("new user", newUser);
    res.json({ newUser });
  } catch (error) {
    next(error);
  }
});

router.post("/edituser", async (req, res, next) => {
  const { name, picture } = req.body;
  const currentUserId = req.user._id;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: currentUserId },
      { name, picture }
    ).exec();
    res.json({ updatedUser });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy();

  res.json({ message: "successfully logged out user" });
});

router.get("/user-information", async (req, res, next) => {
  const userId = req.session.user;
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId);
      if (!user) throw new Error("user not found");
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
