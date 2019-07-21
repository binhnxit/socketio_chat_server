'use strict'
import {REQUEST_REGISTER_CHANNEL} from '../constants/events'
import ChannelService from '../services/channelService'

export default class ChannelHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.registerChannel()
  }

  registerChannel() {
    this.socket.on(REQUEST_REGISTER_CHANNEL, (data) => {
      console.log('Request create channel', data)
      const params = JSON.parse(data)
      const channelService = new ChannelService()
      const result = channelService.create(params)
      this.socket.emit('message', {created: "ok", data: result})
    })
  }
}
