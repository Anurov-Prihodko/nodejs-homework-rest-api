const { NotFound } = require('http-errors')
const contactsOptions = require('../../model/options')

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOptions.updateContactById(contactId, req.body)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  })
}

module.exports = updateContactById
