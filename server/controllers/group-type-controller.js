const { GroupType } = require('../models')

exports.index = async (req, res) => {
  const groupTypes = await GroupType.find().exec()
  res.json({ data: groupTypes })
}

exports.store = async (req, res) => {
  const groupType = new GroupType(req.body)
  await groupType.save()
  res.status(201).json(groupType)
}

exports.show = async (req, res) => {
  const groupType = await GroupType.findById(req.params.id).exec()
  res.json({ data: groupType || {} })
}

exports.update = async (req, res) => {
  await GroupType.findByIdAndUpdate(req.params.id, req.body).exec()
  const groupType = await GroupType.findById(req.params.id).exec()
  res.json({ data: groupType })
}

exports.destroy = async (req, res) => {
  await GroupType.findByIdAndRemove(req.params.id).exec()
  res.status(204).send()
}
