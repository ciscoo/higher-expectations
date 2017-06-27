// optionsController

const express = require('express')
const router = express.Router()

const careerInterests = require('../utils/careerInterests')
const extraInterests = require('../utils/extraInterests')
const postPlans = require('../utils/postPlans')
const raceAndEthnicity = require('../utils/raceAndEthnicity')
const yearInSchool = require('../utils/yearInSchool')

router.get('/', (req, res) => {
  res.json({
    careerInterests,
    extraInterests,
    postPlans,
    yearInSchool,
    races: raceAndEthnicity.races,
    ethnicity: raceAndEthnicity.ethnicity
  })
})

module.exports = router
