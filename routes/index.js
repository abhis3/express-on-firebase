var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express 2", env: process.env.FIREBASE_API_KEY });
});

module.exports = router;
