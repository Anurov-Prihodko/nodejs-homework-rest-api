const { Unauthorized } = require('http-errors')

const { User } = require('../../model')

const updateAvatar = async (req, res) => {
  console.log(req.user)
  if (!req.user) {
    throw new Unauthorized('Not authorized')
  }
  const { avatarURL } = req.user
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { avatarURL: avatarURL })

  res.json({
    status: 'success',
    code: 200,
    avatarURL: avatarURL,
  })
}

module.exports = updateAvatar
