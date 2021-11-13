const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const getAll = async (req, res) => {
  const { page = 1, limit = 2 } = req.query
  const skip = (page - 1) * limit
  const { _id } = req.user
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite owner',
    { skip, limit: +limit }
  ).populate('owner', '_id email subscription')
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
