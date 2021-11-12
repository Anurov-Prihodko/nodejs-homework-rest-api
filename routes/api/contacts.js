const express = require('express')

const { contacts: ctrl } = require('../../controllers')

const {
  validation,
  controllerWrapper,
  authentication,
} = require('../../middlewares')
const {
  joiContactsSchema,
  joiContactsSchemaPut,
  joiContactsSchemaPatch,
} = require('../../validations')

const router = express.Router()

router.get('/', authentication, controllerWrapper(ctrl.getAll))

router.get(
  '/:contactId',
  authentication,
  controllerWrapper(ctrl.getContactById)
)

router.post(
  '/',
  authentication,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.addContact)
)

router.put(
  '/:contactId',
  authentication,
  validation(joiContactsSchemaPut),
  controllerWrapper(ctrl.updateContactById)
)

router.patch(
  '/:contactId/favorite',
  authentication,
  validation(joiContactsSchemaPatch),
  controllerWrapper(ctrl.updateStatusContact)
)

router.delete(
  '/:contactId',
  authentication,
  controllerWrapper(ctrl.removeContactById)
)

module.exports = router
