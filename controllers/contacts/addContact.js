const { NotFound } = require('http-errors')
const contactsOptions = require('../../model/options')

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body
  const result = await contactsOptions.addContact(name, email, phone)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  })
}

module.exports = addContact
