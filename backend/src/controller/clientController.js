const express = require('express')
const router = express.Router()

const clientModel = require('../models/Client')

router.post('/register', async (req, res) => {
  const { nome, endereco, cpf, telefone, email } = req.body

  if(await clientModel.findOne({email})){
    return res.status(422).send({error: true, message: 'Este e-mail já está sendo usado.'})
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
    res.status(201).send({error: false, message: 'Cliente cadastrado com sucesso!', result})
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({error: true, message: 'Error ao tentar cadastrar o cliente.'})
  })

})

router.delete('/:id', async (req, res) => {
  const clientId = req.params.id

  if(!await clientModel.findById(clientId)){
    return res.status(422).send({error: true, message: 'Cliente não encontrado.'})
  }

  clientModel.findByIdAndDelete(clientId)
  .then(result => {
    res.status(200).send({error: false, message: 'Cliente deletado com sucesso!'})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({error: true, message: 'Erro ao tentar deletar o cliente.'})
  })
})

router.patch('/:id', async(req, res) => {
  const clientId = req.params.id
  const { nome, endereco, cpf, telefone, email } = req.body

  if(!await clientModel.findById(clientId)){
    return res.status(422).send({error: true, message: 'Cliente não encontrado.'})
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
    res.status(200).send({error: false, message: 'Cliente editado com sucesso!'})
  })
  .catch(err => {
    res.status(500).send({error: true, message: 'Erro ao tentar editar.'})
  })
})

router.get('/:id?', (req, res) => {

  if(req.params.id){
    return clientModel.findById(req.params.id)
    .then(result => {
      if(!result) return res.status(422).send({error: true, message: 'Cliente não encontrado.'})
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