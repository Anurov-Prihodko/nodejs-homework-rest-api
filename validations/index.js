const { joiContactsSchema } = require('./contactsValidations')
const { joiContactsSchemaPut } = require('./contactsValidations')
const { joiContactsSchemaPatch } = require('./contactsValidations')
const { JoiUserSchema } = require('./contactsValidations')
const { joiUserSchemaAvatar } = require('./contactsValidations')

module.exports = {
  joiContactsSchema,
  joiContactsSchemaPut,
  joiContactsSchemaPatch,
  JoiUserSchema,
  joiUserSchemaAvatar,
}
