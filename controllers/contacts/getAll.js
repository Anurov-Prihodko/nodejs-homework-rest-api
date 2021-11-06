const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const getAll = async (_, res) => {
  const result = await Contact.find({})
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
