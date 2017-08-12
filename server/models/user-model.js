const mongoose = require('mongoose')

const definition = {
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
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
  }]
}

const userSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('User', userSchema)
