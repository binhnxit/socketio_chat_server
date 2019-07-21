'use strict'

import {REQUEST_REGISTER_USER, RESPONSE_SUCCESS} from '../constants/events'
import UserService from '../services/userService'

export default class UserHandler {
  constructor(socket, io) {
    this.socket = socket
    this.io = io

    this.registerUser()
  }

  registerUser() {
    this.socket.on(REQUEST_REGISTER_USER, (data) => {
      console.log('Request create user', data)
      const params = JSON.parse(data)
      const userService = new UserService()
      const res = userService.create(params)
      this.socket.emit(RESPONSE_SUCCESS, {created: "ok", data: res})
    })
  }
}
