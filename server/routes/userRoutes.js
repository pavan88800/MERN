const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const {
  userRegister,
  getAlluser,
  loginUser,
  getUserbyId,
  deleteUser,
  updateUser
} = require('../controllers/userControllers')

const auth = require('../middleware/auth')

router
  .route('/')
  .post(
    [
      check('name', 'Please enter a name').notEmpty(),
      check('username', 'Please enter a name').notEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 })
    ],
    userRegister
  )
  .get(getAlluser)
router
  .route('/login')
  .post(
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists()
    ],
    loginUser
  )
router.route('/auth').get(auth, getUserbyId)
router.route('/delete/:id').delete(auth, deleteUser)
router.route('/update').put(auth, updateUser)
module.exports = router
