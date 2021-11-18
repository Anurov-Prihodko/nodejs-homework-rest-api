const Joi = require('joi')

const joiContactsSchema = Joi.object({
  name: Joi.string().min(2).max(1478).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
})

const joiContactsSchemaPut = Joi.object({
  name: Joi.string().min(2).max(1478),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})

const joiContactsSchemaPatch = Joi.object({
  favorite: Joi.boolean().required(),
})

const JoiUserSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().default('starter'),
  token: Joi.string().default(null),
})

module.exports = {
  joiContactsSchema,
  joiContactsSchemaPut,
  joiContactsSchemaPatch,
  JoiUserSchema,
}
