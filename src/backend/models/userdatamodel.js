const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
    unique: true,
  },
});

const userData = mongoose.model("userModel", schema);

module.exports = userData;
