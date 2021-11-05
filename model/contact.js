const { Schema, model } = require('mongoose')

const contactSchema = Schema({
  name: {
    type: String,
    require: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

const Contact = model('contact', contactSchema)

module.exports = Contact
