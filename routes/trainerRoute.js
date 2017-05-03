var express = require('express');
var router = express.Router();// to create api routes
var mongojs = require('mongojs');

var db = mongojs("mongodb://ajay:ajay@ds011268.mlab.com:11268/corporateng2", ['trainerList']);

router.get('/trainers', function (req, res) {
    db.trainerList.find(function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });      
});

router.get('/trainers/:id',function(req,res){
    var id=req.params.id;
    db.trainerList.findOne({"id":parseInt(id)},function(err,doc){
        if(err){
            res.send(err);
        }
        res.json(doc)
    });
});

module.exports = router;
