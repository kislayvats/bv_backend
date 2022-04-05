const express = require("express");
const {
  authCheck,
  createOrUpdateUser,
  getSingleUser,
} = require("../controllers/user");
const router = express.Router();
const myFunction = (req, res, next) => {
  const { name } = req.params;
  res.json({ message: `Hi there, new user is ${name} ` });
  next();
};
const myFunction2 = (req, res) => {
  const { name } = req.params;
  res.json({ message: `Good job!!` });
};
// ROUTES
router.get("/user/:name", myFunction, myFunction2);
router.get("/get/user", authCheck, getSingleUser);

// create account
router.post("/create/new/user", authCheck, createOrUpdateUser);

// GET  ==> Already stored value ko Call karna hoga tab use karenge
// POST ==> New element is added in their respective collection
// PUT  ==> Already existing element in any collection ko agar edit krna hai

module.exports = router;
