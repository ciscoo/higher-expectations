const { Event } = require('../models')

exports.store = async (req, res) => {
  const event = new Event(req.body)
  await event.save()
  res.json({ data: event })
}

exports.index = async (req, res) => {
  const events = await Event.find().exec()
  res.json({ data: events })
}

exports.show = async (req, res) => {
  const event = Event.findById(req.params.id).exec()
  res.json({ data: event })
}

exports.destroy = async (req, res) => {
  await Event.findByIdAndRemove(req.params.id).exec()
  res.status(201).send()
}

exports.update = async (req, res) => {
  await Event.findByIdAndUpdate(req.params.id, req.body)
  const event = await Event.findById(req.params.id).exec()
  res.json({ data: event })
}
