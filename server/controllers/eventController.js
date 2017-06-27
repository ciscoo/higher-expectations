// eventController.js

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

const Events = require('../models/Event')
const year = require('../utils/yearInSchool')
const postPlans = require('../utils/postPlans')
const extraInterest = require('../utils/extraInterests')
const careerInterest = require('../utils/careerInterests')

// CREATES A NEW EVENT

router.post('/', function (req, res) {
  Events.create({
    startDate: req.body.startDate,
    location: req.body.location,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    title: req.body.title,
    description: req.body.description,
    contactInfo: req.body.contactInfo,
    points: req.body.points,
    validation: req.body.validation,
    audience: year.NA,
    district: req.body.district,
    school: req.body.school,
    postPlans: postPlans.NA,
    extraInterest: extraInterest.NA,
    careerInterest: careerInterest.NA
  },
   function (err, user) {
     if (err) return res.status(500).send('There was a problem adding the information to the database.')
     res.status(200).send(user)
   })
})

  // RETURNS ALL EVENTS IN THE DATABASE
router.get('/', function (req, res) {
  Events.find({}, function (err, users) {
    if (err) return res.status(500).send('There was a problem finding the events.')
    res.status(200).send(users)
  })
})

// GETS A SINGLE EVENT FROM THE DATABASE
router.get('/:id', function (req, res) {
  Events.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send('There was a problem finding the event.')
    if (!user) return res.status(404).send('No event found')
    res.status(200).send(user)
  })
})

// DELETE A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
  Events.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send('There was a problem deleting the event.')
    res.status(200).send('Event ' + user.name + ' was deleted.')
  })
})

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
  Events.findByIdAndUpdate(req.params.id, req.body, {new: true},
  function (err, user) {
    if (err) return res.status(500).send('There was a problem updating the event.')
    res.status(200).send(user)
  })
})

module.exports = router
