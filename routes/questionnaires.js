const express = require('express');
const router = express.Router();
const Questionnaire = require('../db/models/questionnaire')


router.get('/', async (req, res) => {
  try {
    const questionnaires = await Questionnaire.find()
    res.status(200).json(questionnaires);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params.id
  try {
    const questionnaires = await Questionnaire.findOne({id})
    res.status(200).json(questionnaires);
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const {
    title,
    category,
    questions,
  } = req.body

  try {

    const questionnaireExists = await Questionnaire.findOne({title:title}).exec()

    if (questionnaireExists != null) res.status(200).json(questionnaireExists);
    else {
        const newQuestionnaire = await Questionnaire.create({
            title,
            category,
            questions,
        })
        
        res.status(201).json(newQuestionnaire);
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
    category,
    questions,
  } = req.body

  try {
    
    await Questionnaire.findOneAndUpdate(
      {id},{        
        title,
        category,
        questions,
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

    await Questionnaire.findOneAndDelete({id})    

    res.status(201).json("successful deletion");
  } catch (error) {
    console.log(error.message);
    res.status(400);
  }

});

module.exports = router;
