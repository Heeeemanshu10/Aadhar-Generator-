const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    number: String,
    aadharNumer: {
      type: Number,
      default: Math.floor(Math
        .random() * (999999999999 - 10000000000 + 1)) + 10000000000

    },
    address: String,


    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
