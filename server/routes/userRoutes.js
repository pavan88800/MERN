const express = require('express')
const router = express.Router()
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
  .post(userRegister)
  .get(getAlluser)
router.route('/login').post(loginUser)
router.route('/auth').get(auth, getUserbyId)
router.route('/delete/:id').delete(auth, deleteUser)
router.route('/update').put(auth, updateUser)
module.exports = router
