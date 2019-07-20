import mongoose from 'mongoose'

let messageSchema = new mongoose.Schema({
  _id: ObjectId,
  channelId: ObjectId,
  sender: Number,
  body: String,
  isAttachment: {type: Boolean, default: false},
  read: {type: Boolean, default: false},
  createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Message', messageSchema)
