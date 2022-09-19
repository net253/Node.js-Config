const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("./libs/config");
const MyQuery = require("./libs/MyQuery");

const conn = new MyQuery(config);

/* GET home page. */
router.get("/", (req, res) => {
  res.send({ state: true, message: "Welcome Utility API." });
});

module.exports = router;
