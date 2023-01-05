require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {}, (err) => {
  if(err) return console.log(err)

  console.log('Banco conectado.');
})

mongoose.Promise = global.Promise

module.exports = mongoose