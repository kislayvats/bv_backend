const admin = require("../firebase");
const user = require("../models/user");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  try {
    // console.log(req.headers.authtoken);
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("USER_VALUE==>>", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.createOrUpdateUser = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOneAndUpdate({ email }, { email }, { new: true });
  if (user) {
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      fullName: user.name,
      username: email.split("@")[0],
    }).save();
    res.json(newUser);
  }
};

exports.getSingleUser = async (req, res) => {
  const { email } = req.user;
  const foundPerson = await User.findOne({ email });
  console.log("FOUND==>>", foundPerson);
  res.json(foundPerson);
};
