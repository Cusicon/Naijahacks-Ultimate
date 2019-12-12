// Dashboard [Student and Admin or Inspector]

let express = require("express");
let router = express.Router();

router.get("/", function(req, res, next) {
  res.send("Home");
});

module.exports = router;
