// Stores Admin's (Inspector) details

let mongoose = require("mongoose");

let Admin = mongoose.Schema({
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
  adminID: {
    type: String,
    required: true,
    id: ""
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

module.exports = mongoose.model("Admin", Admin);
