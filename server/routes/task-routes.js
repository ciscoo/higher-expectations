const express = require('express')
const { taskController } = require('../controllers')
const { catchErrors } = require('../middleware/error-handlers')

const router = express.Router()

router.get('/', catchErrors(taskController.index))
router.post('/', catchErrors(taskController.store))
router.get('/:id', catchErrors(taskController.show))
router.patch('/:id', catchErrors(taskController.update))
router.delete('/:id', catchErrors(taskController.destroy))

module.exports = router
