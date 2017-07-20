const mongoose = require('mongoose')

const definition = {
  name: String,
  whatDescription: String,
  whyDescription: String,
  startDate: Date,
  endDate: Date,
  webLink: String,
  pointOfContact: String,
  points: Number,
  validationType: String,
  locationList: String,
  requiremenList: String,
  materialList: String,
  audience: String,
  district: String,
  school: String,
  postPlans: String,
  extraInter: String,
  careerInter: String
}

const taskSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Task', taskSchema)
