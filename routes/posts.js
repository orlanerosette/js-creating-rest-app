const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

// Returns all Post documents
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.join({ message: err });
  }
});

// Creates a new Post document 
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title, 
    description: req.body.description
  });
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  }catch(err){
    res.json({ message: err });
  } 
});

// Returns specific Post document
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({ message: err });
  }
});

// Deletes a specific Post document
router.delete('/:postId', async (req, res) => {
  try{
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  }catch(err){
    res.json({ message: err });
  }
});

// Updates a specific Post document
router.patch('/:postId', async (req, res) => {
  try{
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
      $set: {title: req.body.title}
    });
    // updatedPost.save();
    res.json(updatedPost);
  }catch(err){
    res.json({ message: err });
  }
})

module.exports = router;