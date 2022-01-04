const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/registration",
  [
    check("email", "Email is not valid!").isEmail(),
    check("password", "Password is not valid!").isLength({ min: 4 }),
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

      const user = new User({
        email,
        password,
      });

      await user.save();

      res.status(201).json({ message: "New user was created!" });
    } catch (error) {
      console.error(error);
    }
  },
);

module.exports = router;
