require('./models/User')
require('./models/Track')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email} `)
})
const mongoURL =
  'mongodb+srv://sheroze:sheroze123@cluster0-j5vup.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('CONNCETD TO MONGO DB')
})

mongoose.connection.off('error', err => {
  console.log(' ERROR TO MONGO DB' + err)
})

app.listen(5000, () => {
  console.log('HAHAHA CHAL GAYA BHAI !!')
})
