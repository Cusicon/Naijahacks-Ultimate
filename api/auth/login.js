// Student and Admin or Inspector login router

let express = require("express");
let router = express.Router();

router.get("/0/login", (req, res) => {
  res.send("Login");
});

module.exports = router;
