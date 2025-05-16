const express = require('express');
const router = express.Router();
const Article = require('../db/models/article')

// Upload user, check user, fetch users, 


router.get('/', async (req, res) => {
  try {
    const articles = await Article.find()
    console.log(articles.length);
    res.status(200).json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params.id
  try {
    const articles = await Article.findOne({id})
    res.status(200).json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    title,
    image,
    category,
    content,
    status
  } = req.body

  try {

    const articleExists = await Article.findOne({title}).exec()
    console.log(articleExists)

    if (articleExists != null) res.status(200).json(articleExists);
    else {
      const newArticle = await Article.create({
        title,
        image,
        category,
        content,
        status
      })
      
      res.status(201).json(newArticle);
    }
    
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

router.put('/:id', async (req, res) => {
  const {id} = req.params.id
  const {
    title,
    image,
    category,
    content,
    status
  } = req.body

  try {
    
    await Article.findOneAndUpdate(
      {id},{
        title,
        image,
        category,
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
  const {
    title,
    image,
    category,
    content,
    status
  } = req.body

  try {

    await Article.findOneAndDelete({id})    

    res.status(201).json("successful deletion");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
