'use strict'
import {REQUEST_REGISTER_CHANNEL, RESPONSE_SUCCESS, RESPONSE_ERROR} from '../constants/events'
import ChannelService from '../services/channelService'

export default class ChannelHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.registerChannel()
  }

  registerChannel() {
    this.socket.on(REQUEST_REGISTER_CHANNEL, (data) => {
      const params = JSON.parse(data)
      const channelService = new ChannelService()
      try {
        const result = channelService.create(params)
        this.socket.emit(RESPONSE_SUCCESS, {created: "ok", data: result})
      } catch (e) {
        this.socket.emit(RESPONSE_ERROR, {created: "fail", data: null})
      }
    })
  }
}
