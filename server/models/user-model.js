const mongoose = require('mongoose')

const definition = {
  firstName: { type: String, trim: true, required: 'Missing required [firstName] property' },
  lastName: { type: String, trim: true, required: 'Missing required [lastName] property' },
  email: { type: String, trim: true, required: true },
  // googleId: String,
  password: String,
  // tokens: Array,
  counselor: { type: String, trim: true, default: 'You need to find your counselor' },
  points: { type: Number, trim: true, default: 0 },
  district: { type: [String], trim: true, required: true },
  school: { type: [String], trim: true, required: true },
  yearInSchool: { type: String, trim: true, required: true },
  postPlans: { type: [String], trim: true, required: true },
  extraInter: { type: [String], trim: true, required: true },
  careerInter: { type: [String], trim: true, required: true },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: 'Missing required [type] property.'
  },
  // profile: {
  //   name: String,
  //   gender: String,
  //   location: String,
  //   website: String,
  //   picture: String
  // },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  completedTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }],
  completedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
}

const options = {
  timestamps: true
}

const userSchema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('User', userSchema)
