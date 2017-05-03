var express=require('express');
var path = require('path');// to work with file system
var port=8000;
var app=express();
// get API to home page 

var indexApi = require('./routes/indexRoute');
var trainerApi = require('./routes/trainerRoute');
app.use('/',indexApi);
app.use('/api',trainerApi);

// app.get('/',function(req,res){
//    // res.send("hello, soon u will see index page")
//    res.render('index.html')
// })

//view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// it will make client as root folder
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port,function(){
    console.log('hi, app is listening at port 8000');
})