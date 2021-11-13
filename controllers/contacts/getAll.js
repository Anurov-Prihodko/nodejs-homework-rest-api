const { NotFound } = require('http-errors')
const { Contact } = require('../../model')

const getAll = async (req, res) => {
  const { page = 1, limit = 2 } = req.query

  if (typeof page !== 'number' || typeof limit !== 'number') {
    throw new NotFound('Not found page or limit')
  }

  const one = +limit / +limit
  const skip = (page - one) * limit
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
