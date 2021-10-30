const fs = require('fs/promises')

const contactsPath = require('../helpers/contactsPath')

const listContacts = async () => {
  const result = await fs.readFile(contactsPath, 'utf-8')
  if (!result) {
    return null
  }
  return JSON.parse(result)
}

module.exports = listContacts
