const { Task } = require('../models')

exports.store = async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.json({ data: task })
}

exports.index = async (req, res) => {
  const tasks = await Task.find().exec()
  res.json({ data: tasks })
}

exports.show = async (req, res) => {
  const task = await Task.findById(req.params.id).exec()
  res.json({ data: task })
}

exports.destroy = async (req, res) => {
  await Task.findByIdAndRemove(req.params.id).exec()
  res.status(204).send()
}

exports.update = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body).exec()
  const task = Task.findById(req.params.id).exec()
  res.json({ data: task })
}
