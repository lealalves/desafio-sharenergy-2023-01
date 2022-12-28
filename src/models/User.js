const mongoose = require('../database/')
const userSchema = mongoose.Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User