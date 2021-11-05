const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const removeContactById = async (req, res) => {
  console.log(req.params)
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Contact deleted',
  })
}

module.exports = removeContactById
