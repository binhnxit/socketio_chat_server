'use strict'

import {SEND_MESSAGE, RESPONSE_SUCCESS} from '../constants/events'
import MessageService from '../services/messageService'

export default class MessageHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.createMsg()
  }

  createMsg() {
    this.socket.on(SEND_MESSAGE, (data) => {
      const params = JSON.parse(data)
      const messageService = new MessageService()
      const res = messageService.create(params)
      this.io.to(this.socket.activeChannel).emit(RESPONSE_SUCCESS, {created: "ok", data: res})
    })
  }
}
