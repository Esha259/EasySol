const express = require("express");
const userData = require("./../models/userdatamodel");
const createuserdata = async function (req, res) {
  try {
    //This is the body that was sent by the browser
    console.log(req.body);

    ///Creating a new document out of the sent body and saving it in our database
    let newtour = await userData.create(req.body);
    console.log(newtour);
    console.log("The data is succesfully added");

    const newt = JSON.stringify(newtour);
    res.send(newt);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createuserdata };
