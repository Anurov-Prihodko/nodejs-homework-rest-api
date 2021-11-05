const express = require('express')

const { contacts: ctrl } = require('../../controllers')

const { validation, controllerWrapper } = require('../../middlewares')
const {
  joiContactsSchema,
  joiContactsSchemaFlex,
} = require('../../validations/contactsValidations')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post(
  '/',
  validation(joiContactsSchema),
  controllerWrapper(ctrl.addContact)
)

router.put(
  '/:contactId',
  validation(joiContactsSchemaFlex),
  controllerWrapper(ctrl.updateContactById)
)

router.patch(
  '/:contactId/favorite',
  validation(joiContactsSchemaFlex),
  controllerWrapper(ctrl.updateStatusContact)
)

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById))

module.exports = router
