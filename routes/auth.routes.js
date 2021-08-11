const { Router } = require('express')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  async (req, res) => {

    try {
      const { username, password } = req.body
      const candidate = await User.findOne({ username })

      if (candidate)
        return res.status(400).json({ message: 'There is such user' })

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ username, password: hashedPassword })

      await user.save()
      res.status(201).json({ message: 'User has been created!' })
    } catch (e) {
      res.status(500).json({ message: 'something went wrong, try again' })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  async (req, res) => {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })

      if (!user) return res.status(400).json({ message: 'User not find' })

      const isPasswordMatch = await bcrypt.compare(password, user.password)

      if (!isPasswordMatch)
        return res
          .status(400)
          .json({ message: 'password is incorrect, try again' })

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      })

      res.json({ token, userId: user.id })
    } catch (e) {
      res.status(500).json({ message: 'something went wrong, try again' })
    }
  }
)

module.exports = router
