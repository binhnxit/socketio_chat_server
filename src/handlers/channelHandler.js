'use strict'

import {REQUEST_CREATE_CHANNEL} from '../constants/events'

export default class ChannelHandle {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.createChannel()
  }

  createChannel() {
    this.socket.on(REQUEST_CREATE_CHANNEL, (data) => {
      console.log('Request create channel', data)
      this.socket.emit('message', {hello: "how are you?"})
    })
  }
}
