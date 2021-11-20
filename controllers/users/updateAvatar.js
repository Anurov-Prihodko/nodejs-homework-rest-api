const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { NotFound, BadRequest } = require('http-errors')
const moment = require('moment')

const { User } = require('../../model')

const avatarDir = path.join(__dirname, '../../public/avatars')

const updateAvatar = async (req, res) => {
  if (!req.file) {
    throw new BadRequest('Enter the file please')
  }

  const { path: tmpUpload, originalname } = req.file
  const { _id } = req.user

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

    const date = moment().format('DD-MM-YYYY_hh-mm-ss')
    const fileName = `${_id}_${date}_${originalname}`
    const resultUpload = path.join(avatarDir, String(_id), fileName)

    await fs.rename(tmpUpload, resultUpload)
    const avatar = path.join('/avatars', String(_id), fileName)

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
