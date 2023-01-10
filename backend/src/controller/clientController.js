const express = require('express')
const router = express.Router()

const clientModel = require('../models/Client')

router.post('/register', async (req, res) => {
  const { nome, endereco, cpf, telefone, email } = req.body

  if(await clientModel.findOne({email})){
    return res.status(422).send({error: true, message: 'E-mail already use'})
  }

  let errors = []

  if(!nome){
    errors.push({message: 'Por favor insira um nome'})
  }

  if(nome?.length < 3){
    errors.push({message: 'Nome muito curto'})
  }

  if(!endereco){
    errors.push({message: 'Por favor insira um endereço'})
  }

  if(!email){
    errors.push({message: 'Por favor insira um email'})
  }

  if(email?.length <= 2){
    errors.push({message: 'E-mail muito curto'})
  }

  if(!telefone){
    errors.push({message: 'Por favor insira um telefone'})
  }

  if(telefone?.length <= 7){
    errors.push({message: 'Telefone inválido'})
  }

  if(!cpf){
    errors.push({message: 'Por favor insira um cpf'})
  }

  if(cpf?.length < 11){
    errors.push({message: 'Cpf inválido'})
  }

  if(errors.length > 0){
    return res.status(422).send({error: true, errors})
  }

  clientModel.create(req.body)
  .then(result => {
    res.status(201).send({error: false, message: 'Client created successfully', result})
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({error: true, message: 'Error on create client'})
  })

})

router.delete('/:id', async (req, res) => {
  const clientId = req.params.id

  if(!await clientModel.findById(clientId)){
    return res.status(422).send({error: true, message: 'Client not found'})
  }

  clientModel.findByIdAndDelete(clientId)
  .then(result => {
    res.status(200).send({error: false, message: 'Client deleted successfully'})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({error: true, message: 'Error on delete client'})
  })
})

router.patch('/:id', async(req, res) => {
  const clientId = req.params.id
  const { nome, endereco, cpf, telefone, email } = req.body

  if(!await clientModel.findById(clientId)){
    return res.status(422).send({error: true, message: 'Client not found'})
  }

  let errors = []

  if(!nome){
    errors.push({message: 'Por favor insira um nome'})
  }

  if(nome?.length < 3){
    errors.push({message: 'Nome muito curto'})
  }

  if(!endereco){
    errors.push({message: 'Por favor insira um endereço'})
  }

  if(!email){
    errors.push({message: 'Por favor insira um email'})
  }

  if(email?.length <= 2){
    errors.push({message: 'E-mail muito curto'})
  }

  if(!telefone){
    errors.push({message: 'Por favor insira um telefone'})
  }

  if(telefone?.length <= 7){
    errors.push({message: 'Telefone inválido'})
  }

  if(!cpf){
    errors.push({message: 'Por favor insira um cpf'})
  }

  if(cpf?.length < 11){
    errors.push({message: 'Cpf inválido'})
  }

  if(errors.length > 0){
    return res.status(422).send({error: true, errors})
  }

  clientModel.findByIdAndUpdate(clientId, req.body)
  .then(result => {
    res.status(200).send({error: false, message: 'Client updated successfully'})
  })
  .catch(err => {
    res.status(500).send({error: true, message: 'Error on try update'})
  })
})

router.get('/:id?', (req, res) => {

  if(req.params.id){
    return clientModel.findById(req.params.id)
    .then(result => {
      if(!result) return res.status(422).send({error: true, message: 'Client not found'})
      res.status(200).send({error: false, result})
    })
    .catch(err => res.status(500).send({error: true, message: 'Erro ao requisitar cliente'}))
  }

  clientModel.find()
  .then(result => {
    res.status(200).send({error: false, result})
  })
  .catch(err => {
    res.status(500).send({error: true, message: 'Erro ao requisitar clientes'})
  })
  
})

module.exports = router