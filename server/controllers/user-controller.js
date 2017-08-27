const { User } = require('../models')
// const { careerInterests } = require('../utils')

exports.store = async (req, res) => {
  const user = new User(req.body)
  // const {careerInter} = req.body
  // user.careerInter = careerInterests.filter(career => careerInter.includes(career))
  await user.save()
  res.json({ data: user })
}

exports.index = async (req, res) => {
  const users = await User.find().exec()
  res.json({ data: users })
}

exports.show = async (req, res) => {
  const user = await User.findById(req.params.id).populate('tasks completedTasks events completedEvents type').exec()
  res.json({ data: user })
}

exports.destroy = async (req, res) => {
  await User.findByIdAndRemove(req.params.id).exec()
  res.status(204).send()
}

exports.update = async (req, res) => {
  const user = await User.findById(req.params.id, req.body).exec()
  const { addToTasks, removeFromTasks, addToEvents, removeFromEvents } = req.body

  if (addToTasks && addToTasks.length > 0) {
    user.tasks = [...new Set(user.tasks.concat(addToTasks))]
  }

  if (removeFromTasks && removeFromTasks.length > 0) {
    user.tasks = user.tasks.map(task => task._id).filter(taskId => !removeFromTasks.includes(taskId))
  }

  if (addToEvents && addToEvents.length > 0) {
    user.events = [...new Set(user.events.concat(addToEvents))]
  }

  if (removeFromEvents && removeFromEvents.length > 0) {
    user.events = user.events.map(event => event._id).filter(eventId => !removeFromEvents.includes(eventId))
  }
  await user.save()
  res.json({ data: user })
}

exports.populate = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body).exec()
  const { tasks, completedTasks, events, completedEvents } = req.body
  if (tasks || completedTasks || events || completedEvents) {
    // todo throw error message
  }
  const user = await User.findById(req.params.id).exec()
  res.json({ data: user })
}
