import mongoose from 'mongoose'

let channelSchema = new mongoose.Schema({
  name: String,
  description: String,
})

module.exports = mongoose.model('Channel', channelSchema)
