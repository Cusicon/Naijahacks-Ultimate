// Student router

let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Profile");
});

module.exports = router;
