const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    fullName: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
