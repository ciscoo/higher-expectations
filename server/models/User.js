const mongoose = require('mongoose')

const definition = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  points: Number,
  race: String,
  ethnicity: String, /* list of constants defined in util folders */
  district: String,
  school: String,
  yearInSchool: String,
  postPlans: String,
  extraInterest: String,
  careerInterest: String
}

const userSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('User', userSchema)
