const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  DoB: {
    type: String
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  }
})

module.exports = mongoose.model('user', UserSchema)
