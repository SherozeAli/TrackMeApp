const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')

const router = express.Router()
router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })
    await user.save()

    res.send('YOU MADE A POST REQUEST ')
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

// router.get('/signin', (req, res) => {
//   console.log(req.body)
// })

module.exports = router
