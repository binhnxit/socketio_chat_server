import ChannelModel from '../models/channel'

export default class channelService {
  constructor() {
  }

  async create(params) {
    const conditions = {
      clientId: params.clientId,
      workerId: params.workerId
    }
    return await ChannelModel.findOneAndUpdate(
      conditions,
      params,
      {upsert: true, new: true}
    )
  }
}