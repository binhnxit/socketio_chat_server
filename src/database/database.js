import mongoose from 'mongoose'
require('dotenv').config()

const database = process.env.MONGO_DB
const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASSWORD

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    let connStr = `mongodb://${user}:${pass}@${host}:${port}/${database}`
    let config = {
      autoIndex: false,
      useNewUrlParser: true,
      useFindAndModify: false
    }
    mongoose.connect(connStr, config)
    .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.log(err)
      console.error('Database connection error')
    })
  }
}

exports.init = new Database()
