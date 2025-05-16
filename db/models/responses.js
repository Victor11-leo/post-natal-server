const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    questionnaireId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Questionnaire',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    responses: [
      {
        questionText: String,
        answer: String, // Store user’s selected answer or free-text
      },
    ],
    submittedAt: {
      type: Date,
      default: Date.now,
    },
});

const Response = mongoose.model("Response",responseSchema)

module.exports = Response