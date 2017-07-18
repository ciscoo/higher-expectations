const mongoose = require('mongoose')

const variables = {
  title: String,
  startDate: String,
  contactInfo: String,
  points: Number,
  validation: String,
  description: String,
  location: String,
  audience: String,
  district: String,
  school: String,
  postPlans: String,
  extraInterest: String,
  careerInterest: String,
  requiremenList: String,
  materialList: String
}

const helperSchema = new mongoose.Schema(variables)

module.exports = mongoose.model('Helper', helperSchema)
