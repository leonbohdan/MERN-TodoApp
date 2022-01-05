const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWTKEY = process.env.JWTKEY || 'weerwer348576dfnbmvjhgyt39867543vbgh';

router.post(
  "/registration",
  [
    check("email", "Email is not valid!").isEmail(),
    check("password", "Password is not valid!").isLength({ min: 4 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Not valid registration data!'
        });
      }

      const { email, password } = req.body;

      const isUsed = await User.findOne({ email });

      if (isUsed) {
        return res.status(300).json({
          message:
            "This email is using by other person, you should use other one.",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 8);

      const user = new User({
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: "New user was created!" });
    } catch (error) {
      console.error(error);
    }
  },
);

router.post(
  "/login",
  [
    check("email", "Email is not valid!").isEmail(),
    check("password", "Password is not valid!").exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Not valid registration data!'
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        res.status(400).json({ message: "User was not found!" });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ message: "Password is not correct!" });
      }

      const jwtSecret = JWTKEY;

      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
      
      res.json({ token, userId: user.id });
    } catch (error) {
      console.error(error);
    }
  },
);

module.exports = router;
