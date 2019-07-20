import ChannelModel from '../models/channel'

export default class channelService {
  constructor() {
  }

  create(params) {
    const conditions = {
      'client.id': params.client.id,
      'worker.id': params.worker.id
    }
    ChannelModel.findOneAndUpdate(
      conditions,
      params,
      {upsert: true, new: true},
      (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('add channel success')
        }
      }
    )
  }
}