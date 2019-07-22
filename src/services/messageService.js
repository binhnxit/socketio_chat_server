import ChannelModel from '../models/channel'
import MessageModel from '../models/message'

export default class MessageService {
  constructor() {
  }

  async create(params) {
    const channel = await ChannelModel.findById(params.channelId)

    if (!channel) {
      throw Error('channel_not_found')
    }

    params.seenAt = null
    params.createdAt = new Date()

    return await MessageModel.create(params)
  }
}
