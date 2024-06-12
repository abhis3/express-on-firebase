var express = require("express");
var router = express.Router();

// Log all environment variables
console.log('Environment Variables:', process.env); // Print entire object

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express 3", env: process.env.FIREBASE_API_KEY, node: process.env.NODE_ENV });
});

module.exports = router;
