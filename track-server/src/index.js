require('./models/User')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.get('/', (req, res) => {
  res.send('Hi there !!')
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
