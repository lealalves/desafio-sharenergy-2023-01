const express = require('express')
const router = express.Router()

const { randomUser } = require('../services/randomUser')
const { randomDog } = require('../services/randomDog')

router.get('/randomuser', async (req, res) => {
  const results = await randomUser()

  if(!results){
    return res.status(500).send({error: true, message:"Erro interno."})
  }

  res.send(results)
})

router.get('/randomdog', async (req, res) => {
  const results = await randomDog()

  if(!results){
    return res.status(500).send({error: true, message:"Erro interno."})
  }

  res.send(results)
})

module.exports = router