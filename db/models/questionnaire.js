const mongoose = require('mongoose')

const questionnaireSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String }, // e.g. "Breastfeeding Knowledge", "Attitudes", "Practices", "Anthropometrics"
    questions: [
      {
        questionText: { type: String, required: true },
        type: {
          type: String,
          enum: ['yes-no', 'agree-neutral-disagree', 'yes-sometimes-no', 'text'],
          required: true,
        },        
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
const Questionnaire = mongoose.model("Questionnaire",questionnaireSchema)

module.exports = Questionnaire