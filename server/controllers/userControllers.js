const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userRegister = async (req, res) => {
  const { username, name, email, password, BoD, gender } = req.body
  try {
    //   check if user Exisits or not
    console.log(User)
    let user = await User.findOne({ email: email })

    if (user) {
      return res.status(400).json({ error: 'User Already Registered  ' })
    }
    user = new User({
      username,
      email,
      name,
      password,
      password,
      BoD,
      gender
    })
    let salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

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
    return res.status(500).json({ error: error.message })
  }
}

// get All users

const getAlluser = async (req, res) => {
  try {
    //   get All Users
    let user = await User.find({})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email: email })
    if (!user) {
      return res.status(404).json({ error: 'User Not Found' })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      res.status(400).json({ errors: 'Invalid Credentials' })
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

module.exports = { userRegister, getAlluser, loginUser }
