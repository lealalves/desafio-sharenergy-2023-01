require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@apicluster.kbp4k.mongodb.net/desafio-sharenergy?retryWrites=true&w=majority`, {}, (err) => {
  if(err) return console.log(err)
  console.log('Banco conectado.');
})

mongoose.Promise = global.Promise

module.exports = mongoose