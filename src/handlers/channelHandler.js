'use strict'

import {REQUEST_CREATE_CHANNEL} from '../constants/events'
import ChannelService from '../services/channelService'

export default class ChannelHandle {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.createChannel()
  }

  createChannel() {
    this.socket.on(REQUEST_CREATE_CHANNEL, (data) => {
      console.log('Request create channel', data)
      const params = JSON.parse(data)
      const channelService = new ChannelService()
      channelService.create(params)
      this.socket.emit('message', {created: "ok"})
    })
  }
}
