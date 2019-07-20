import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  created_at: Date,
})

module.exports = mongoose.model('User', userSchema)
