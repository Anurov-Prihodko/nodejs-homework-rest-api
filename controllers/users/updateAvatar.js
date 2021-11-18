const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { Unauthorized, NotFound, BadRequest } = require('http-errors')
const moment = require('moment')

const { User } = require('../../model')

const avatarDir = path.join(__dirname, '../../public/avatars')

const updateAvatar = async (req, res) => {
  if (!req.user) {
    throw new Unauthorized('Not authorized')
  }

  if (!req.file) {
    throw new BadRequest('Enter the file please')
  }

  const { path: tmpUpload, originalname } = req.file
  const { email, _id } = req.user

  try {
    await Jimp.read(tmpUpload)
      .then((image) => {
        return image
          .autocrop()
          .resize(250, 250, Jimp.RESIZE_BEZIER)
          .write(tmpUpload)
      })
      .catch((err) => {
        console.log(err)
      })

    // console.log(tmpUpload)
    const date = moment().format('DD-MM-YYYY_hh-mm-ss')
    const fileName = `${_id}_${date}_${originalname}`
    const resultUpload = path.join(avatarDir, email, fileName)

    await fs.rename(tmpUpload, resultUpload)
    const avatar = path.join('/avatars', email, fileName)

    const result = await User.findByIdAndUpdate(
      _id,
      { avatarURL: avatar },
      { new: true }
    )
    if (!result) {
      throw new NotFound(`User with id=${_id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      avatarURL: avatar,
    })
  } catch (error) {
    await fs.unlink(tmpUpload)
    throw error
  }
}

module.exports = updateAvatar
