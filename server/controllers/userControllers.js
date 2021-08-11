const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

// @route    POST api/users
// @desc     Register user
// @access   Public
const userRegister = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { username, name, email, password, DoB, gender } = req.body
  try {
    //   check if user Exisits or not

    let user = await User.findOne({ email: email })

    if (user) {
      return res.status(404).json({ errors: [{ msg: 'User already exists' }] })
    }

    console.log(user)
    user = new User({
      username,
      email,
      name,
      password,
      DoB,
      gender
    })
    console.log(user)
    // let salt = await bcrypt.genSalt(10)
    // user.password = await bcrypt.hash(password, salt)
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    console.log(user)
    // Create JOSN web Token Here

    let payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, 'sqqqq', { expiresIn: '50 days' }, (err, token) => {
      if (err) throw err
      if (token) {
        return res.json({ token })
      }
    })

    // return res.status(200).json({ message: 'User Saved to DataBase' })
  } catch (error) {
    console.error(error)
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

// @route    GET api/users
// @desc     Get All Users
// @access   Public

const getAlluser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    //   get All Users
    let user = await User.find({})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// @route    GET api/users/login
// @desc    Login User
// @access   Public
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email: email })
    if (!user) {
      return res.status(404).json({ errors: [{ msg: 'User Not Found' }] })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(404).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

    let payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, 'sqqqq', { expiresIn: '50 days' }, (err, token) => {
      if (err) throw err
      if (token) {
        return res.json({ token })
      }
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}

// @route    GET api/users/auth
// @desc    Login User
// @access   Private

const getUserbyId = async (req, res) => {
  try {
    // let user = await User.findById(req.user.id).select('-password')
    const user = await User.findById(req.user.id).select('-password')
    console.log(req.user.id)
    if (user) {
      return res.status(200).json({ user: user })
    } else {
      return res.status(404).json({ errors: [{ msg: 'User not found' }] })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}

// @route    GET api/users/update/
// @desc    Login User
// @access   Public
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id)
    console.log(user)
    if (user) {
      user.username = req.body.username || user.username
      user.email = req.body.email || user.email
      user.name = req.body.name || user.name
      user.DoB = req.body.DoB || user.DoB
      user.gender = req.body.gender || user.gender

      if (req.body.password) {
        user.password = req.body.password
        let salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.body.password, salt)
      } else {
        user.password
      }

      let updatedUser = await user.save()
      console.log(updatedUser)

      let payload = {
        user: {
          id: updatedUser.id
        }
      }

      let token = jwt.sign(payload, 'sqqqq', { expiresIn: '50 days' })
      console.log(token)
      console.log(updatedUser)

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email,
        DoB: updatedUser.DoB,
        gender: updatedUser.gender,
        password: updatedUser.password,
        token: token
      })
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    console.error(error.message)
    console.log(error.message)
    return res.status(500).json({ error: error.message })
  }
}
// @route    GET api/users/delete/:id
// @desc    Login User
// @access   Public
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id)
    console.log(req.user.id)
    if (user) {
      await user.remove()
      res.json(user)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  userRegister,
  getAlluser,
  loginUser,
  getUserbyId,
  deleteUser,
  updateUser
}
