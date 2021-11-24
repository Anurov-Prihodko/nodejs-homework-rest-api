const express = require('express')

const {
  validation,
  controllerWrapper,
  authentication,
  upload,
} = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const { JoiUserSchema } = require('../../validations')

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
  upload.single('avatar'),
  controllerWrapper(ctrl.updateAvatar)
)

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

router.post('/verify', controllerWrapper(ctrl.repitVerify))

module.exports = router
