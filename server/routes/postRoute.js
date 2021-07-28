const express = require('express')
const { check } = require('express-validator')
const {
  createPost,
  getAllPosts,
  deletePost
} = require('../controllers/postController')
const auth = require('../middleware/auth')
const checkObjectId = require('../middleware/checkObjectId')
const router = express.Router()

router
  .route('/post')
  .post([auth, check('text', 'Please enter a post').notEmpty()], createPost)

router.route('/allposts').get(auth, getAllPosts)
router.route('/:id').delete(auth, checkObjectId('id'), deletePost)
module.exports = router
