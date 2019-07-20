'use strict'

import {REQUEST_ROOM} from '../constants/events'

export default class BaseHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.message()
  }

  message() {
    this.socket.on(REQUEST_ROOM, (data) => {
      console.log('Request room', data)
    })
  }
}
