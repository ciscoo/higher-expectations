const mongoose = require('mongoose')

const definition = {
  name: {
    type: String,
    trim: true,
    required: 'Missing required [name] property.'
  }
}

const groupTypeSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('GroupType', groupTypeSchema)
