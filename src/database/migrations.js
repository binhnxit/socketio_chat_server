import './database'
import Channel from '../models/channel'

Channel.findOneAndUpdate(
  {name: 'generate'},
  {
    name: 'generate',
    description: 'Generate'
  },
  {upsert: true, new: true},
  function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      console.log('add channel success')
    }
  }
)

Channel.findOneAndUpdate(
  {name: 'random'},
  {
    name: 'random',
    description: 'Random'
  },
  {upsert: true, new: true},
  function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      console.log('add channel success')
    }
  }
)

console.log('Migration successfully!!!')
