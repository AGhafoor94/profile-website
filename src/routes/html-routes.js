const express = require("express");
const router = express.Router();

const sendHome = (req, res) => {
  res.redirect("/home");
};
const homeRoute = (req, res) => {
  res.render("dashboard");
};

router.get("/", sendHome);

router.get("/home", homeRoute);
module.exports = router;
