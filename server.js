const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
require('dotenv').config();

const articles = require('./routes/articles')
const subPosts = require('./routes/subPosts')
const questionnaires = require('./routes/questionnaires')
const responses = require('./routes/responses')
const reviews = require('./routes/reviews')
const users = require('./routes/users')

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected db');
    app.listen(8000,() => {
        console.log('App running');
    })
})
.catch((e) => {
    console.log(`connection failed ${e.message}`);
})

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/articles',articles)
app.use('/api/subposts',subPosts)
app.use('/api/reviews',reviews)
app.use('/api/questionnaires',questionnaires)
app.use('/api/responses',responses)
app.use('/api/users',users)


app.get('/',(req,res) => {
    res.json({status:"Success"})
})


module.exports = app

