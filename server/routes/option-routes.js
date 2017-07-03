const express = require('express')
const { optionController } = require('../controllers')

const router = express.Router()

router.get('/', optionController.index)

module.exports = router
