const { Unauthorized, NotFound } = require('http-errors')
const jwt = require('jsonwebtoken')

const { User } = require('../model')

const { SECRET_KEY } = process.env

const authentication = async (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (!header) {
      throw new Unauthorized()
    }

    const [bearer, token] = header.split(' ')
    if (bearer !== 'Bearer') {
      throw new Unauthorized()
    }

    try {
      const { id } = jwt.verify(token, SECRET_KEY)
      const user = await User.findById(id)

      if (!user) {
        throw new NotFound('User not found')
      }

      if (!user.token) {
        throw new Unauthorized('Not authorized')
      }

      req.user = user
      next()
    } catch (error) {
      throw new Unauthorized(error.message)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authentication
