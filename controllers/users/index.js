const signup = require('./signup')
const login = require('./login')
const checkUserByToken = require('./checkUserByToken')
const logout = require('./logout')
const updateAvatar = require('./updateAvatar')

module.exports = { signup, login, checkUserByToken, logout, updateAvatar }
