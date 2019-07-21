import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  userId: {type: Number, required: true},
  role: {type: String, required: true, default: "worker"},
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  createdAt: {type: Date, default: new Date(), required: true}
})

module.exports = mongoose.model('User', userSchema)
