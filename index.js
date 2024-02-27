let express = require('express')
let app = express()
let body_parser = require('body-parser')
let routes = require('./routes/route')
let port = 5001;
let mongoose = require('./db/database')


app.set('view engine' , 'ejs')


app.use(body_parser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/assets'));
app.use('/' , routes)

mongoose;

app.listen(port , (req ,res) => {
    console.log("our port is now run perfectly on" , port);
})
