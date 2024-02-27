let express = require('express');
let route = express();
let controller = require('../controller/conteroler')

route.get('/' , controller.defaultpath)
route.post('/quizedata' , controller.quizedata)
route.get('/querypage' , controller.querypage)
route.post('/answer' , controller.answer)
route.get('/view' , controller.view)
route.post('dataquery' , controller.dataquery)

route.get('/editd/:id' , controller.editd)
route.post('/updatedata' , controller.updatedata)

route.get('/deleted/:id' ,controller.deleted )

module.exports  = route