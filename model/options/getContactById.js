const listContacts = require('./listContacts')

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  if (!contacts) {
    return null
  }
  const contactById = contacts.find(
    (contact) => String(contact.id) === String(contactId)
  )
  if (!contactById) {
    return null
  }
  return contactById
}

module.exports = getContactById
