const express = require("express");
const loginRouter = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const userDatacontroller = require("../controllers/userdata");

loginRouter.use(express.json());

loginRouter.post("/", userDatacontroller.createuserdata);

loginRouter.get("/home", (req, res) => {
  res.send("Home Page");
});

module.exports = loginRouter;
