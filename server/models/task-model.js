const mongoose = require('mongoose')

const definition = {
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  dueDate: { type: Date, required: true },
  webLink: { type: [String], required: true, trim: true },
  location: { type: [String], required: true, trim: true },
  contactInfo: { type: [String], required: true, time: true },
  points: { type: Number, required: true, trim: true },
  requirements: { type: [String], required: true, trim: true },
  materialList: { type: [String], required: true, trim: true },
  audience: { type: [String], required: true, trim: true },
  district: { type: [String], required: true, trim: true },
  school: { type: [String], required: true, trim: true },
  postPlans: { type: [String], required: true, trim: true },
  extraInter: { type: [String], required: true, trim: true },
  careerInter: { type: [String], required: true, trim: true },
  verificationType: { type: Number, required: true, trim: true },
  completionStatus: { type: Number, trim: true, default: null },
  completedOn: { type: Date, default: null }
}

const options = {
  timestamps: true
}

const taskSchema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('Task', taskSchema)
