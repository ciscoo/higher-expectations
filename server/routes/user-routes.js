const express = require('express')
const { userController } = require('../controllers')
const { catchErrors } = require('../middleware/error-handlers')

const router = express.Router()

router.get('/', catchErrors(userController.index))
router.post('/', catchErrors(userController.store))
router.get('/:id', catchErrors(userController.show))
router.patch('/:id', catchErrors(userController.update))
router.delete('/:id', catchErrors(userController.destroy))
router.put('/:id', catchErrors(userController.populate))

module.exports = router
