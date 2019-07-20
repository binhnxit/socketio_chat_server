import mongoose from 'mongoose'

let channelSchema = new mongoose.Schema({
  _id: ObjectId,
  client: {
    id: Number,
    name: String,
    avatar: String,
    badge: {type: Number, default: 0}
  },
  worker: {
    id: Number,
    name: String,
    age: Number,
    avatar: String,
    badge: {type: Number, default: 0}
  },
  star: {type: Boolean, default: false},
  createdAt: {type: Date, default: new Date()},
  lastMessageAt: {type: Date, default: new Date()},
  lastMessage: {type: String, default: null},
})

module.exports = mongoose.model('Channel', channelSchema)
