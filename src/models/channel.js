import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let channelSchema = new mongoose.Schema({
  _workerId: ObjectId,
  _clientId: ObjectId,
  badge: {
    worker: Number,
    client: Number
  },
  star: {type: Boolean, default: false},
  createdAt: {type: Date, default: new Date()},
  lastMessageAt: {type: Date, default: new Date()},
  lastMessage: {type: String, default: null},
})

module.exports = mongoose.model('Channel', channelSchema)
