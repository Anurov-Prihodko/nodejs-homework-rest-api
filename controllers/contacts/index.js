const getAll = require('./getAll')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const updateContactById = require('./updateContactById')
const updateStatusContact = require('./updateStatusContact')
const removeContactById = require('./removeContactById')

module.exports = {
  getAll,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContact,
  removeContactById,
}
