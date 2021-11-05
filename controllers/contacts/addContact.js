const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const addContact = async (req, res) => {
  const result = await Contact.create(req.body)
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
