var express = require('express');
var router = express.Router();// to create api routes

router.get('/', function (req, res) {
    //res.send('Welcome to Edureka !!');
     res.render('index.html');   
});

// router.get('/trainers', function (req, res) {
//     res.send('[{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"},{"id":1,"name":"Ajay","exp":12,"course":"Angular"}]');
//     // res.render('index.html');   
// });

module.exports = router;
