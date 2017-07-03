const { User } = require('../models')

exports.store = async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.json({ data: user })
}

exports.index = async (req, res) => {
  const users = await User.find().exec()
  res.json({ data: users })
}

exports.show = async (req, res) => {
  const user = await User.findById(req.params.id).exec()
  res.json({ data: user })
}

exports.destroy = async (req, res) => {
  await User.findByIdAndRemove(req.params.id).exec()
  res.status(204).send()
}

exports.update = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body).exec()
  const user = await User.findById(req.params.id).exec()
  res.json({ data: user })
}
