const express = require('express');
const router = express.Router();
const user = require("../modals/LoginDatabase")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser")
router.post('/signup', [
    body('email').isEmail(),
    body('Number').isLength({ min: 10 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const salt = await bcrypt.genSalt(10)

        const cpass = await bcrypt.hash(req.body.confirmpassword, salt);
        const pass = await bcrypt.hash(req.body.password, salt);
        if (pass === cpass) {
            let User = await user.findOne({ email: req.body.email })
            if (User) {
                return res.status(400).json({ error: "User already exist please click forgot password" })
            }
            User = await user.create({
                name: req.body.name,
                Number: req.body.Number,
                email: req.body.email,
                password: pass,
                confirmpassword: cpass,
            })
            const data = {
                user: {
                    id: User.id
                }
            }
            const authToken = jwt.sign(data, "wehdhh")
            res.json(authToken);
        } else {
            res.send("password and confirm password should be same")
        }
    }

    catch (error) {
        res.status(500).send("oooh sorry error occured")
        console.log(error)
    }
})

router.get("/others", (req, res) => {
    res.send("sign up")
})
//creating login endpoint 
router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    let success = false
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let User = await user.findOne({ email })
        if (!User) {
            success = false
            res.status(400).json({success ,error: "login with corect credentials" })
        }
        const psscompare = await bcrypt.compare(password, User.password)
        if (!psscompare) {
            success = false
            res.status(400).json({success, error: "login with corect credentials" })
        }
        const data = {
            user: {
                id: User.id
            }
        }
        const authToken = jwt.sign(data, "wehdhh")
        res.json(authToken);
    } catch (error) {
        console.log("internal servor error")
        console.log(error)
    }
})
//routes-3 getting user data 
router.get("/getuser", fetchuser, async (req, res) => {
    try {
      const User = await user.findById(req.user.id).select("-password -confirmpassword")
      res.send(User)
    } catch (error) {
      console.error("Internal server error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = router;