const multer = require('multer')
const path = require('path')

const tmpDir = path.join(__dirname, '../', 'tmp')

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: { fileSize: 2048 },
})

const fileFilter = (req, file, cb) => {
  console.log(file.mimetyp)
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: uploadConfig,
  fileFilter,
})

module.exports = upload
