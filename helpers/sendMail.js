const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

// const mail = {
//   to: 'amyr.prihodko2akk@gmail.com',
//   from: 'alex.prihodko.gp@gmail.com',
//   subject: 'New order from the site',
//   html: '<p>From the website come new order</p>',
// }

const sendMail = async (data) => {
  const email = { ...data, from: 'alex.prihodko.gp@gmail.com' }
  await sgMail.send(email)
  return true
}

module.exports = sendMail
