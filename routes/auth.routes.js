const { Router } = require('express')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()
const incorrectStatus = 400
const invalidStatus = 500
const successStatus = 201

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const candidate = await User.findOne({ username })

    if (candidate)
      return res.status(incorrectStatus).json({ message: 'There is such user', status: incorrectStatus })

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ username, password: hashedPassword })
    await user.save()
    res.status(successStatus).json({ message: 'User has been created!', status: successStatus })
  } catch (e) {
    res.status(invalidStatus).json({ message: 'something went wrong, try again', status: invalidStatus })
  }
})

// /api/auth/login

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) return res.status(incorrectStatus).json({ message: 'User not find'})

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch)
      return res
        .status(incorrectStatus)
        .json({ message: 'password is incorrect, try again'})

    const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
      expiresIn: '1h',
    })

    res.json({ token, userId: user.id })
  } catch (e) {
    res.status(500).json({ message: 'something went wrong, try again' })
  }
})

module.exports = router
