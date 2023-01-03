const mongoose = require('../database/')
const clientSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true
  }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client