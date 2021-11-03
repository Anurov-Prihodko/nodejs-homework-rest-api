const { NotFound } = require('http-errors')
const contactsOptions = require('../../model/options')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOptions.getContactById(contactId)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  })
}

module.exports = getContactById
