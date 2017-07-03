const { Group } = require('../models')

exports.index = async (req, res) => {
  const groups = await Group
    .find()
    .populate('type')
    .exec()
  res.json({ data: groups })
}

exports.store = async (req, res) => {
  const group = new Group(req.body)
  await group.save()
  res.status(201).json(group)
}

exports.show = async (req, res) => {
  const group = await Group.findById(req.params.id)
    .populate('type')
    .exec()
  res.json({ data: group || {} })
}

exports.update = async (req, res) => {
  await Group.findByIdAndUpdate(req.params.id, req.body).exec()
  const group = await Group.findById(req.params.id)
    .populate('type')
    .exec()
  res.json({ data: group })
}

exports.destroy = async (req, res) => {
  await Group.findByIdAndRemove(req.params.id).exec()
  res.status(204).send()
}
