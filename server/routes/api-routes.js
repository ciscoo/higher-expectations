const express = require('express')
const groupRoutes = require('./group-routes')
const groupTypeRoutes = require('./group-type-routes')

const router = express.Router()

router.use('/groups', groupRoutes)
router.use('/group-types', groupTypeRoutes)

module.exports = router
