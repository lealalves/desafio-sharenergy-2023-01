const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')

const authController = require('./controller/authController')
const servicesController = require('./controller/servicesController')
const clientController = require('./controller/clientController')


const corsOptions = {
  origin: 'http://localhost:5173',  //Your Client, do not write '*'
  credentials: true,
};
app.use(cors(corsOptions))

app.use(session({
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: true, 
  cookie: { 
    secure: false
   }
}))

app.use(express.json())

const isLogged = (req, res, next) =>{
  if(!req.session.data){
    return res.send({error: true, message: 'need login'})
  }
  next()
}

app.use('/auth', authController)
app.use('/services', servicesController)
app.use('/client', clientController)

app.get('/', isLogged, (req, res) => {
  res.send({message: 'Home', user: req.session.data})
})

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
})