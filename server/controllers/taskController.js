// taskController.js

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

const task = require('../models/Task')
const year = require('../utils/yearInSchool')
const postPlans = require('../utils/postPlans')
const extraInterest = require('../utils/extraInterests')
const careerInterest = require('../utils/careerInterests')

// CREATES A NEW TASK

router.post('/', function (req, res) {
  task.create({
    name: req.body.name,
    whatDescription: req.body.whatDescription,
    whyDescription: req.body.whyDescription,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    webLink: req.body.webLink,
    pointOfContact: req.body.pointOfContact,
    points: req.body.points,
    validationType: req.body.validationType,
    locationList: req.body.locationList,
    requirementList: req.body.requirementList,
    materialList: req.body.materialList,
    audience: year.NA,
    district: req.body.district,
    school: req.body.school,
    postPlans: postPlans.NA,
    extraInter: extraInterest.NA,
    careerInter: careerInterest.NA
  },
   function (err, task) {
     if (err) return res.status(500).send('There was a problem adding the information to the database.')
     res.status(200).send(task)
   })
})

  // RETURNS ALL TASKS IN THE DATABASE
router.get('/', function (req, res) {
  task.find({}, function (err, tasks) {
    if (err) return res.status(500).send('There was a problem finding the tasks.')
    res.status(200).send(tasks)
  })
})

// GETS A SINGLE TASK FROM THE DATABASE
router.get('/:id', function (req, res) {
  task.findById(req.params.id, function (err, task) {
    if (err) return res.status(500).send('There was a problem finding the task.')
    if (!task) return res.status(404).send('No task found')
    res.status(200).send(task)
  })
})

// DELETE A TASK FROM THE DATABASE
router.delete('/:id', function (req, res) {
  task.findByIdAndRemove(req.params.id, function (err, task) {
    if (err) return res.status(500).send('There was a problem deleting the task.')
    res.status(200).send('task ' + task.name + ' was deleted.')
  })
})

// UPDATES A SINGLE TASK IN THE DATABASE
router.put('/:id', function (req, res) {
  task.findByIdAndUpdate(req.params.id, req.body, {new: true},
  function (err, task) {
    if (err) return res.status(500).send('There was a problem updating the task.')
    res.status(200).send(task)
  })
})

module.exports = router
