// Examination window router

let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Examboard");
});

module.exports = router;
