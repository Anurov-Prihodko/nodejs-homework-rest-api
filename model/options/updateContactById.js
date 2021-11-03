const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const updateContactById = async (contactId, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((it) => it.id === contactId)
  if (idx === -1) {
    return null
  }

  const updatedContact = { ...contacts[idx], ...data }
  contacts[idx] = updatedContact

  await updateContacts(contacts)
  return updatedContact
}

module.exports = updateContactById
