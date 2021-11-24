const { BadRequest } = require('http-errors')

const { sendMail } = require('../../helpers')
const { User } = require('../../model')

const repitVerify = async (req, res) => {
  const { email } = req.body
  if (!email) {
    throw new BadRequest('missing required field email')
  }

  const user = await User.findOne({ email })

  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  const mail = {
    to: email,
    subject: 'Registration confirm',
    html: `<a href='http://localhost:3000/api/users/verify/${user.verificationToken}'>Push for confirm</a>`,
  }
  await sendMail(mail)

  res.json({
    message: 'Verification email sent',
  })
}

module.exports = repitVerify
