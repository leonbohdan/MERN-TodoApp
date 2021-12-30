const { Router } = require('express');
const User = require('../models/User');
const router = Router;
const User = require('../models/User')

router.post('/registration', async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res.status(300).json({ message: 'This email is using by other person, you should use other one.' });
    }

    const user = new User({
      email, password
    });

    await user.save();

    res.status(201).json({ message: 'New user was created!' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
