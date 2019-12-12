// Store Student's details
let mongoose = require("mongoose");

let Student = mongoose.Schema({
  details: {
    names: {
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      },
      others: [
        {
          type: String
        }
      ]
    },
    gender: "",
    avatar: {
      type: String,
      required: false,
      default:
        "https://stefanshairstudio.co.nz/wp-content/uploads/2019/05/avatar.png"
    }
  },
  studentID: {
    type: String,
    required: true
  },
  auth: {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model("Student", Student);
