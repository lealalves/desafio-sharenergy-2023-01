const express = require('express')
const app = express()
const session = require('express-session')

const authController = require('./controller/authController')
const servicesController = require('./controller/servicesController')

app.use(session({
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: true, 
  cookie: { 
    maxAge: 60000,
    sameSite: 'none',
    secure: false
   }
}))

app.use(express.json())

app.use('/auth', authController)
app.use('/services', servicesController)

app.use((req, res, next) => {
  if(!req.session.isLogged){
    return console.log('pls loggin');
  }
  next()
})


app.get('/', (req, res) => {
  res.send('Oi!')
})

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
})