import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let messageSchema = new mongoose.Schema({
  channelId: ObjectId,
  author: ObjectId,
  body: String,
  isAttachment: {type: Boolean, default: false, required: true},
  seenAt: {type: Date, default: null, required: true},
  createdAt: {type: Date, default: new Date(), required: true}
})

module.exports = mongoose.model('Message', messageSchema)
