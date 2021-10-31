const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const filteredContacts = contacts.filter(
    (contact) => String(contact.id) !== String(contactId)
  )
  const idx = contacts.findIndex(
    (item) => String(item.id) === String(contactId)
  )
  if (idx === -1) {
    return null
  }
  await updateContacts(filteredContacts)
  return contacts[idx]
}

module.exports = removeContact
