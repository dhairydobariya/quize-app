let quizeschemas = require('../models/quize')


let defaultpath = (req ,res) => {
    console.log("");
    res.render('index')
}
let quizedata = (req , res) => {
        let { question , answera , answerb , answerc , answerd , correct_ans }  = req.body
        if( correct_ans == answera || correct_ans == answerb || correct_ans == answerc || correct_ans == answerd ){
            let a = []
            let data = new quizeschemas({
                question, 
                option : [ answera,answerb,answerc,answerd],
                correct_ans
            })
            
            data.save()
            res.redirect('/')
        }else{
            res.send("your correct answer field are incorrect")
        }

}

let querypage =async (req ,res) => {

    let data =await quizeschemas.find()
    // console.log(data , "its our data");
    res.render('querypage' , {data})
}

// let answer =async (req ,res) => {
//     let i
//    for(i = 0 ; i <= req.body.id.length ; i++){
//         let a =await quizeschema.find()
//         a.forEach(ele => {
//             if(ele.correct_ans == req.body.answer+i){
               
//                 console.log("gg");

//             }
//         });
//    }
// }


// let answer = async (req, res) => {
//     let v = 1

//     try {
//         const quizQuestions = await quizeschemas.find(); // Fetch all quiz questions from the database once

//         for (let i = 0; i < req.body.id.length; i++) {
//             const currentQuestion =await quizQuestions.find(q => q.id === req.body.id[i]);
            
//             if (currentQuestion) {
//                 // Check if the answer matches the correct answer for the current question
//                 if (currentQuestion.correct_ans === req.body['answer' + i]) {
//                     console.log('Correct answer for question with id ' + req.body.id[i]);
//                     // Handle correct answer logic
//                   let  t = v++
//                     console.log(t);
//                 } else {
//                     console.log('Incorrect answer for question with id ' + req.body.id[i]);
//                     // Handle incorrect answer logic
//                 }
                
//             }
//         }

//         // Send response or perform additional actions
//         res.status(200).send('Answers checked successfully',v);
//     } catch (error) {
//         console.error('Error checking answers:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };

let answer = async (req, res) => {
    let correctAnswersCount = 0;
    let incorrectAnswersCount = 0;

    try {
       

        const quizQuestions = await quizeschemas.find(); 

        for (let i = 0; i < req.body.id.length; i++) {
            const currentQuestion = await quizQuestions.find(q => q.id === req.body.id[i]);

            if (currentQuestion) {
               
                if (currentQuestion.correct_ans === req.body['answer' + i]) {
                    console.log('Correct answer for question with id ' + req.body.id[i]);
                 
                    correctAnswersCount++;
                } else {
                    console.log('Incorrect answer for question with id ' + req.body.id[i]);
             
                    incorrectAnswersCount++;
                }
            }
        }
        const totalQuestions = req.body.id.length;
        res.render('output' , {totalQuestions , correctAnswersCount , incorrectAnswersCount})
        // res.status(200).send(`Answers checked successfully. Total questions: ${totalQuestions}, Total correct answers: ${correctAnswersCount}, Total incorrect answers: ${incorrectAnswersCount}`);
    } catch (error) {
        console.error('Error checking answers:', error);
        res.status(500).send('Internal Server Error');
    }
};

let view = async (req , res) => {

    let data = await quizeschemas.find()
    
    res.render('view' , {data});

}

let dataquery = (req ,res) => {
    
        

}



let editd = async (req , res) => {

    let {id} = req.params
    let d =await quizeschemas.findById(id);

    res.render('editd' , {d})
}
let updatedata = async (req ,res) => {

        let {id , answer1 , answer2 , answer3 , answer4 , correct_ans , question} = req.body

        let data =await quizeschemas.findByIdAndUpdate(id , {question , option : [answer1 , answer2 ,answer3 , answer4] , correct_ans });
        res.redirect('/view')

}

let deleted = async (req ,res) => {

    let {id} = req.params   

    let delatedata =await quizeschemas.findByIdAndDelete(id);
    res.redirect('/view')
}   

module.exports = {
    defaultpath,
    quizedata,
    querypage,
    answer,
    view,
    dataquery,
    editd,
    updatedata,
    deleted
}