const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const Post = require('../models/Post.js')

// @route    POST api/posts
// @desc     Create a post
// @access   Private
const createPost = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const user = await User.findById(req.user.id).select('-password')

    const newPost = new Post({
      text: req.body.text,
      author: user.name,
      user: req.user.id
    })
    const post = await newPost.save()
    return res.json(post)
  } catch (err) {
    console.error(err.message)
    console.log(err)
    res.status(500).send('Server Error')
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })
    return res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' })
    }
    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
    }
    console.log(post.user.toString())
    // removed
    await post.remove()
    res.json({ msg: 'Post removed' })
  } catch (err) {
    console.error(err.message)

    res.status(500).send('Server Error')
  }
}

module.exports = {
  createPost,
  getAllPosts,
  deletePost
}
