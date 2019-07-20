'use strict'

import fs from 'fs'
import express from 'express'
const app = express()

let http, server

if (process.env.APP_ENV === 'production') {
  http = require('https')
  const privateKey = fs.readFileSync(process.env.PRIVATE_KEY, 'utf8')
  const certificate = fs.readFileSync(process.env.CERTIFICATE, 'utf8')
  const credentials = { key: privateKey, cert: certificate, passphrase: process.env.PASSPHRASE }
  server = http.createServer(credentials, app)
} else {
  http = require('http')
  server = http.createServer(app)
}

export default server
