const express = require('express')

const { contacts: ctrl } = require('../../controllers')

const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema, joiContactsSchemaPut } = require('../../validations')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post(
  '/',
  validation(joiContactsSchema),
  controllerWrapper(ctrl.addContact)
)

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById))

router.put(
  '/:contactId',
  validation(joiContactsSchemaPut),
  controllerWrapper(ctrl.updateContactById)
)

module.exports = router
