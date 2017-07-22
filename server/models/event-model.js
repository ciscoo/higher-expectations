const mongoose = require('mongoose')

const definition = {
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  webLink: String,
  startTime: String,
  endTime: String,
  location: String,
  contactInfo: String,
  points: Number,
  validation: String,
  requirements: String,
  materialList: String,
  audience: String,
  district: String,
  school: String,
  postPlans: String,
  extraInter: String,
  careerInter: String
}

const eventSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Event', eventSchema)
