// Event.js

const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
  startDate: Date,
  startTime: String,
  endTime: String,
  title: String,
  location: String,
  description: String,
  contactInfo: String,
  points: Number,
  validation: String,
  audience: String,
  district: String,
  school: String,
  postPlans: String,
  extraInterest: String,
  careerInterest: String
})
mongoose.model('Event', eventSchema)

module.exports = mongoose.model('Event')
