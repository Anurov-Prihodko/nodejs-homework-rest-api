const express = require('express')
const { NotFound } = require('http-errors')
const Joi = require('joi')

const contactsOptions = require('../../model/controllers')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const router = express.Router()

router.get('/', async (_, res, next) => {
  try {
    const result = await contactsOptions.listContacts()
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      result,
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOptions.getContactById(contactId)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      result,
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const result = await contactsOptions.addContact(name, email, phone)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      result,
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
