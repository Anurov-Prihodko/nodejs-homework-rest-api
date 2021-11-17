const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

const { User } = require('../../model')

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
