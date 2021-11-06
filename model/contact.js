const { Schema, model } = require('mongoose')

const contactSchema = Schema(
  {
    name: {
      type: String,
      minlengh: 2,
      maxlength: 1478,
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
      require: true,
    },
  },

  { versionKey: false, timestamps: true }
)

const Contact = model('contact', contactSchema)

module.exports = Contact
