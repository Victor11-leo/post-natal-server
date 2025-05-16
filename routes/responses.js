const express = require('express');
const router = express.Router();
const Response = require('../db/models/responses')


router.get('/', async (req, res) => {
  try {
    const responses = await Response.find()
    res.status(200).json(responses);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params.id
  try {
    const responses = await Response.findOne({id})
    res.status(200).json(responses);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    questionnaireId,
    userId,
    responses
  } = req.body

  try {

    const newResponse = await Response.create({
        questionnaireId,
        userId,
        responses
    })
    
    res.status(201).json(newResponse)
    
    
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});



router.delete('/:id', async (req, res) => {
  const {id} = req.params.id  
  try {

    await Response.findOneAndDelete({id})    

    res.status(201).json("successful deletion");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
