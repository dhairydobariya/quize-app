let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quizes').then(() => {
    console.log("mongo db is succesfully connected with server");
}).catch((err) => {
    console.log("its direct db error show" , err);
})

