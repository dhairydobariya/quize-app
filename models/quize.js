let mongoose = require('mongoose')

let quizeschema = mongoose.Schema({

    question : String,
    option : Array,
    correct_ans : String
})

let quize = mongoose.model('quizz' , quizeschema);

module.exports = quize;