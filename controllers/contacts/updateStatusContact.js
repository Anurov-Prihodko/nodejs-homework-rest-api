const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  if (!req.body) {
    return res.status(400).json({
      code: 400,
      message: 'missing field favorite',
    })
  }
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  )
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  })
}

module.exports = updateStatusContact
