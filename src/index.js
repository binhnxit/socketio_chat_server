'use strict'

require('dotenv').config()

import server from './server'
import './database/database'
import SocketServer from './modules/socketServer'

const port = process.env.SOCKET_PORT || 3000

new SocketServer(server, port)
