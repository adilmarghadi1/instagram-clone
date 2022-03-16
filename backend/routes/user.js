const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = require('express').Router()


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "User good " })
          }

        const hashedPassword = await bcrypt.hash(password, 10)
        user = new User({name, email, password : hashedPassword})
        await user.save()
    }
    catch(err) {
        console.log(err)
    }
})



// Login Section

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        let us
    }

})