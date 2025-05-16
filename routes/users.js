const express = require('express');
const router = express.Router();
const User = require('../db/models/user')

// Upload user, check user, fetch users, 


router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    username,
    email,
    ageGroup,
    location,
    role
  } = req.body

  try {

    const userExists = await User.findOne({email:email}).exec()

    if (userExists != null) res.status(200).json(userExists);
    else {
      const newUser = await User.create({
        username,email,ageGroup,location,role
      })
      
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
