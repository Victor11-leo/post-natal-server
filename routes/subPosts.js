const express = require('express');
const router = express.Router();
const SubPost = require('../db/models/subPost')

// Upload user, check user, fetch users, 


router.get('/', async (req, res) => {
  try {
    const posts = await SubPost.find()
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params.id
  try {
    const posts = await SubPost.findOne({id})
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    article,
    title,
    image,
    content,
    status
  } = req.body

  try {

    const postExists = await SubPost.findOne({title}).exec()

    if (postExists != null) res.status(200).json(postExists);
    else {
        const newSubPost = await SubPost.create({
          article,
          title,
          image,
          content,
          status
        })
        
        res.status(201).json(newSubPost);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

router.put('/:id', async (req, res) => {
  const {id} = req.params.id
  const {
    article,
    title,
    image,
    content,
    status
  } = req.body

  try {
    
    await SubPost.findOneAndUpdate(
      {id},{
        article,
        title,
        image,
        content,
        status
      }
    )    
    
    res.status(201).json("Successful update");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

router.delete('/:id', async (req, res) => {
  const {id} = req.params.id  

  try {

    await SubPost.findOneAndDelete({id})    

    res.status(201).json("successful deletion");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
