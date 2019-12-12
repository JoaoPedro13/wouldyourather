
'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  questionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
  },
  option: {
    type: String,
    enum: ["A", "B"],
    required: true
  },

}, {
  timestamps: true
}
);

module.exports = mongoose.model('Answer', schema);
