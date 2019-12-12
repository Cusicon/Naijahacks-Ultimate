// Stores Result of all student (Accessed by inspector or Admin).

let mongoose = require("mongoose");

let Scoreboard = mongoose.Schema({
  results: [
    {
      studentID: "",
      exam: {
        examID: "",
        inspector: "",
        score: "",
        ratings: "",
        time_started: "",
        time_submitted: ""
      }
    }
  ]
});

module.exports = mongoose.model("Scoreboard", Scoreboard);
