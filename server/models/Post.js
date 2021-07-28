const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String
    }
  },
  { timestamp: true }
)

module.exports = mongoose.model('post', PostSchema)
