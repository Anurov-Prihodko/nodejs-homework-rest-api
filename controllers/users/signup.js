const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')

const { User } = require('../../model')

const avatarsDir = path.join(__dirname, '../../public/avatars')

const signup = async (req, res) => {
  const { email, subscription, password, token } = req.body
  const avatar = gravatar.url(email, { s: '250' })

  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`Email: ${email}, already in use.`)
  }

  const newUser = new User({ email, subscription, token, avatarURL: avatar })
  newUser.setPassword(password)
  await newUser.save()

  const userFolder = path.join(avatarsDir, newUser.email)
  await fs.mkdir(userFolder)
  res.status(201).json({
    Status: '201 Created',
    ContentType: 'application/json',
    ResponseBody: {
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: avatar,
      },
    },
  })
}

module.exports = signup
