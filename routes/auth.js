const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require("../middleware/auth");

const User = require('../models/User');

// GET api/auth
// Get logged in user
// Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error")
  }
})


// POST api/auth
// Auth user & get token
// Public
router.post('/', [
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter the password").exists()
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ "msg": "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 36000
    }, (err, token) => {
      if (err) {
        console.error(err.message)
      }

      res.json(token)
    })
  } catch (err) {
    res.status(500).send("Server error")
  }

})

module.exports = router;