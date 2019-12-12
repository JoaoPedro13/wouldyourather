
'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  optionA: {
    type: String,
    required: true

  },
  optionB: {
    type: String,
    required: true

  },
  category: {
    type: String,
    enum: ["heart", "football", "gun", "wrench", "dollar"],
    required: true
  },
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Question', schema);