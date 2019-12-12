// Store written and unwritten exams

let mongoose = require("mongoose");

let Exam = mongoose.Schema({
  examID: "",
  subject: "",
  inspector: "",
  durationPerQuestion: "",
  questionAmount: ""
});

module.exports = mongoose.model("Exam", Exam);
