const mongoose = require('mongoose')

const definition = {
  name: {
    type: String,
    trim: true,
    required: 'Missing required [name] property.'
  },
  description: {
    type: String,
    trim: true,
    required: 'Missing required [description] property.'
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GroupType',
    required: 'Missing required [type] property.'
  }
}

const groupSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Group', groupSchema)
