const mongoose = require('mongoose')

const app = require('../app')

const { PORT = 3000, DB_HOST } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT), console.log('Database connection successful'))
  .catch((err) => {
    console.log(err.massage)
    process.exit(1)
  })
