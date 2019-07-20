'use strict'

import socket from 'socket.io'
import BaseHandler from '../handlers/baseHandler'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import _ from 'underscore'
import ChannelHandle from "../handlers/channelHandler";

export default class SocketServer {
  /*
   * SocketServer constructor
   */
  constructor(server, port) {
    this.port = port
    this.io = socket.listen(server, {
      // parser: customParser
    })
    this.handlers = []

    server.listen(this.port, (error) => {
      if (error) {
        throw new Error(error)
      } else {
        console.log('Server listen on port ' + `${this.port}`)
      }
    })

    this.io.on('connection', (socket) => this.onConnection(socket))
    this.io.on('error', (error) => this.onError(error))

    _.each(this.io.nsps, function (nsp) {
      nsp.on('connect', function (socket) {
        if (!socket.auth) {
          console.log("removing socket from", nsp.name)
          delete nsp.connected[socket.id]
        }
      })
    })
  }

  /*
   * SocketServer onConnection event
   */
  onConnection(socket) {
    console.log('A client is connected socket server.')
    this.setHandlers(socket)

    //@TODO implement authentication
    //socket.auth = false
    //let self = this
    // socket.on('authenticate', function (data) {
    //   self.checkAuthToken(data.token, function (err, success) {
    //     if (!err && success) {
    //       console.log("Authenticated socket ", socket.id);
    //       socket.auth = true;
    //       self.setHandlers(socket)
    //       socket.emit('connect')
    //       _.each(self.io.nsps, function(nsp) {
    //         if(_.findWhere(nsp.sockets, {id: socket.id})) {
    //           console.log("restoring socket to", nsp.name);
    //           nsp.connected[socket.id] = socket;
    //         }
    //       });
    //     }
    //   })
    // })
    //
    // setTimeout(function () {
    //   if (!socket.auth) {
    //     console.log("Authentication Disconnecting socket ", socket.id);
    //     socket.disconnect('unauthorized');
    //   }
    // }, 1000);

    socket.on('disconnect', this.onDisconnect)
  }


  /*
   * SocketServer onDisconnect event
   */
  onDisconnect() {
    console.log('A client is disconnected.')
  }

  setHandlers(socket) {
    console.log('Handle')
    this.handlers['baseHandler'] = new BaseHandler(socket, this.io)
    this.handlers['channelHandler'] = new ChannelHandle(socket, this.io)
  }

  onError(error) {
    console.log(error)
  }

  checkAuthToken(token, cb) {
    let privateKey = fs.readFileSync(__dirname + '/../keys/public.key')
    jwt.verify(token, privateKey, function (err, success) {
      cb(err, success)
    })
  }
}
