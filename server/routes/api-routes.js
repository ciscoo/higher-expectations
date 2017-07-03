const express = require('express')
const groupRoutes = require('./group-routes')
const groupTypeRoutes = require('./group-type-routes')
const eventRoutes = require('./event-routes')

const router = express.Router()

router.use('/groups', groupRoutes)
router.use('/group-types', groupTypeRoutes)
router.use('/events', eventRoutes)

module.exports = router
