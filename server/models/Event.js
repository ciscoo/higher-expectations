const mongoose = require('mongoose')

const definition = {
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
}

const eventSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Event', eventSchema)
