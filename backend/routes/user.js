 
const jwt = require("jsonwebtoken")

const { requireLogin } = require("../middleware/auth")
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("../models/user")


router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ error: "User good " })
      }
  
      
     
      const hashedPassword = await bcrypt.hash(password, 10)
      user = new User({ name, email, password: hashedPassword })
      await user.save()
      res.status(201).json({ message: "User created successfully" })
    } catch (err) {
      console.log(err)
    }
  })



// Login Section

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error : "Invalid Credentials"})
        }

        const isMatched = await bcrypt.compareSync(password, user.password)
        if (!isMatched) {
            return res.status(400).json({error : "Invalid Credentials"})
        }

        const token = await jwt.sign({_id : user._id}, process.env.JWT_SECRET, {
            expiresIn : "1h"
        })
        res.json({user})
    }

    catch (err) {
        console.log(err)
    }

})


router.get("/", requireLogin, async (req, res) => {
  console.log(req.user)
  try {
    const user = await User.findById(req.user._id).select("-password")
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router

