import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let messageSchema = new mongoose.Schema({
  channelId: ObjectId,
  author: ObjectId,
  body: String,
  isAttachment: {type: Boolean, default: false},
  seenAt: {type: Date, default: null},
  createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Message', messageSchema)
