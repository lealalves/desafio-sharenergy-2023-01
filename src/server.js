const express = require('express')
const app = express()

const authController = require('./controller/authController')

app.use(express.json())

app.use('/auth', authController)

app.get('/', (req, res) => {
  console.log(req.isLogged);
  res.send('Oi!')
})

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
})