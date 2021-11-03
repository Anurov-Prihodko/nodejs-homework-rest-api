const { NotFound } = require('http-errors')
const contactsOptions = require('../../model/options')

const getAll = async (_, res) => {
  const result = await contactsOptions.listContacts()
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  })
}

module.exports = getAll
