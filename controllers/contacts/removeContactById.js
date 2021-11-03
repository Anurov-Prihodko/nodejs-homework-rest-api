const { NotFound } = require('http-errors')
const contactsOptions = require('../../model/options')

const removeContactById = async (req, res, next) => {
  console.log(req.params)
  const { contactId } = req.params
  const result = await contactsOptions.removeContact(contactId)
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
