const Post = require("../models/post");

exports.createNewPost = async (req, res) => {
  const values = req.bdy;
  console.log(req);
  const newPost = await new Post(values).save();
  res.json(newPost);
};
