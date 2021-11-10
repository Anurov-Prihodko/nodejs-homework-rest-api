const express = require('express')

const { validation, controllerWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const { JoiUserSchema } = require('../../validations')

const router = express.Router()

router.post(
  '/signup',
  validation(JoiUserSchema),
  controllerWrapper(ctrl.signup)
)

router.post('/login', validation(JoiUserSchema), controllerWrapper(ctrl.login))

module.exports = router
