const express = require('express')
const router = express.Router()
const {
  userRegister,
  getAlluser,
  loginUser
} = require('../controllers/userControllers')
router
  .route('/')
  .post(userRegister)
  .get(getAlluser)
router.route('/login').post(loginUser)
module.exports = router
