const mongoose = require('mongoose')

const definition = {
  endDate: Date,
  webLink: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Helper'
  }
}

const taskSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Task', taskSchema)
