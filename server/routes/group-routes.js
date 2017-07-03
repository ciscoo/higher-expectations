const express = require('express')
const { groupController } = require('../controllers')
const { catchErrors } = require('../middleware/error-handlers')

const router = express.Router()

router.get('/', catchErrors(groupController.index))
router.post('/', catchErrors(groupController.store))
router.get('/:id', catchErrors(groupController.show))
router.patch('/:id', catchErrors(groupController.update))
router.delete('/:id', catchErrors(groupController.destroy))

module.exports = router
