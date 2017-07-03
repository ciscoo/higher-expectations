const { Router } = require('express')
const { groupTypeController } = require('../controllers')
const { catchErrors } = require('../middleware/error-handlers')

const router = Router()

router.get('/', catchErrors(groupTypeController.index))
router.post('/', catchErrors(groupTypeController.store))
router.get('/:id', catchErrors(groupTypeController.show))
router.patch('/:id', catchErrors(groupTypeController.update))
router.delete('/:id', catchErrors(groupTypeController.destroy))

module.exports = router
