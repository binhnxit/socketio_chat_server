import ChannelModel from '../models/channel'
import UserModel from '../models/user'

export default class ChannelService {
  constructor() {
  }

  async create(params) {
    const client = await UserModel.findOne({userId: params.clientId, role: "client"})
    const worker = await UserModel.findOne({userId: params.workerId, role: "worker"})
    if (!client || !worker) {
      throw Error('client_or_worker_do_not_exists')
    }
    const conditions = {
      _clientId: client._id,
      _workerId: worker._id
    }
    return await ChannelModel.findOneAndUpdate(
      conditions,
      params,
      {upsert: true, new: true}
    )
  }
}
