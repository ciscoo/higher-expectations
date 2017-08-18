const mongoose = require('mongoose')

const definition = {
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  username: String,
  google: String,
  password: String,
  tokens: Array,
  counselor: String,
  points: Number,
  race: String,
  ethnicity: String, /* list of constants defined in util folders */
  district: [String],
  school: [String],
  yearInSchool: String,
  postPlans: [String],
  extraInter: [String],
  careerInter: [String],
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
    // required: 'Missing required [type] property.'
  },
  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    unique: true
  }],
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    unique: true
  }],
  completedTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    unique: true
  }],
  completedEvents: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    unique: true
  }]
}

const userSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('User', userSchema)
