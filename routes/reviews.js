const express = require('express');
const router = express.Router();
const Review = require('../db/models/review')


router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find()
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params.id
  try {
    const reviews = await Review.findOne({id})
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    userId,
    articleId,
    rating,
    comment,    
  } = req.body

  try {

    
    const newReview = await Review.create({
        userId,
        articleId,
        rating:Number(rating),
        comment,
    })
    
    res.status(201).json(newReview);
    
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

router.put('/:id', async (req, res) => {
  const {id} = req.params.id
  const {    
    rating,
    comment,
  } = req.body

  try {
    
    await Review.findOneAndUpdate(
      {id},{        
        rating:Number(rating),
        comment,
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

    await Review.findOneAndDelete({id})    

    res.status(201).json("successful deletion");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
