// userController.js

const express = require('express')
const router = express.Router()

const user = require('../models/User')

// CREATES A NEW USER

router.post('/', function (req, res) {
  user.create(req.body)
    .then(user => {
      console.log('user: ', user)
      res.status(200).json(user)
    })
    .catch(err => {
      console.log('error: ', err)
      res.status(500).json(err)
    })
})

  // RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
  user.find({}, function (err, users) {
    if (err) return res.status(500).send('There was a problem finding the users.')
    res.status(200).send(users)
  })
})

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
  user.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send('There was a problem finding the user.')
    if (!user) return res.status(404).send('No user found')
    res.status(200).send(user)
  })
})

// DELETE A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
  user.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send('There was a problem deleting the user.')
    res.status(200).send('User ' + user.name + ' was deleted.')
  })
})

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
  user.findByIdAndUpdate(req.params.id, req.body, {new: true},
  function (err, user) {
    if (err) return res.status(500).send('There was a problem updating the user.')
    res.status(200).send(user)
  })
})

module.exports = router
