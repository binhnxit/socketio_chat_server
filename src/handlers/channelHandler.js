'use strict'
import
{
  REQUEST_REGISTER_CHANNEL,
  RESPONSE_SUCCESS,
  RESPONSE_ERROR,
  REQUEST_JOIN_CHANNEL,
  REQUEST_LEAVE_CHANNEL
} from '../constants/events'
import ChannelService from '../services/channelService'

export default class ChannelHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.register()
    this.join()
    this.leave()
  }

  register() {
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

  join() {
    this.socket.on(REQUEST_JOIN_CHANNEL, (data) => {
      const {channelId} = JSON.parse(data)
      this.socket.join(channelId)
      this.socket.activeChannel = channelId
    })
  }

  leave() {
    this.socket.on(REQUEST_LEAVE_CHANNEL, (data) => {
      const {channelId} = JSON.parse(data)
      this.socket.leave(channelId)
    })
  }
}
