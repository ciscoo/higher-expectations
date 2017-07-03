const express = require('express')
const { eventController } = require('../controllers')
const { catchErrors } = require('../middleware/error-handlers')

const router = express.Router()

router.get('/', catchErrors(eventController.index))
router.post('/', catchErrors(eventController.store))
router.get('/:id', catchErrors(eventController.show))
router.patch('/:id', catchErrors(eventController.update))
router.delete('/:id', catchErrors(eventController.destroy))

module.exports = router
