const mongoose = require('mongoose')

const definition = {
  startTime: String,
  endTime: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Helper'
  }
}

const eventSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Event', eventSchema)
