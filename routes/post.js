const express = require("express");
const { createNewPost } = require("../controllers/post");
const router = express.Router();

// ROUTES
router.post("/post/create", createNewPost);

module.exports = router;
