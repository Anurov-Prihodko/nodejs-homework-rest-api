const express = require('express')

const {
  validation,
  controllerWrapper,
  authentication,
  upload,
} = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const { JoiUserSchema, joiUserSchemaAvatar } = require('../../validations')

const router = express.Router()

router.post(
  '/signup',
  validation(JoiUserSchema),
  controllerWrapper(ctrl.signup)
)

router.post('/login', validation(JoiUserSchema), controllerWrapper(ctrl.login))

router.get('/current', authentication, controllerWrapper(ctrl.checkUserByToken))

router.post('/logout', authentication, controllerWrapper(ctrl.logout))

router.patch(
  '/avatars',
  authentication,
  upload.single('avatarURL'),
  // validation(joiUserSchemaAvatar),
  controllerWrapper(ctrl.updateAvatar)
)

module.exports = router
