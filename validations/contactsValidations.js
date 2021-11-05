const Joi = require('joi')

const joiContactsSchema = Joi.object({
  name: Joi.string().min(2).max(1478).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
})

const joiContactsSchemaFlex = Joi.object({
  name: Joi.string().min(2).max(1478),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})

module.exports = { joiContactsSchema, joiContactsSchemaFlex }
