const express = require('express')
const router = express.Router()

const userModel = require('../models/User')

router.post('/login', async (req, res) => {

  const { username, password, keepLogin } = req.body

  let errors = []

  if(!username) {
    errors.push({message: 'Please enter a valid user'})
  }

  if(!password){
    errors.push({message: 'Please enter the password'})
  }

  if(errors.length > 0){
    return res.send({error: true, errors})
  }

  const user = await userModel.findOne({username})

  if(!user) {
    return res.status(404).send({error: true, message: 'User not found'})
  }

  if(password !== user.password){
    return res.status(401).send({error: true, message: 'Wrong password'})
  }
  
  if(keepLogin){
    req.session.keepLogin = true
  }

  req.session.data = user
  res.status(200).send(user)

})

module.exports = router