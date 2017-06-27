// Task.js

const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
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
})
mongoose.model('Task', taskSchema)

module.exports = mongoose.model('Task')
