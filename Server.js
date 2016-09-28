var express = require('express');
 var path = require('path');
 var app = express();
 var cons = require('consolidate');
  var port = process.env.PORT || 5000;
   
   mongoose = require('mongoose'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var db = mongoose.connect('mongodb://localhost/DJJB');  //connecting to DJJB database

var Events = require('./views//model/EventModel');

var swig = require('swig');

app.engine('html',swig.renderFile);
app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'html');


app.use(express.static(path.join(__dirname, 'views')));
 //app.use(express.static(__dirname + '/public'));
 //var djEventRouter=express.Router();
var djEventRouter = require('./views/routes/eventRoutes')(Events);
//var addEventRouter = require('./views/routes/addAdminEvent')(Events);
var adminRouter = require('./views/routes/adminRouter');
var addA


app.get('/', function(req,res) {
  console.log('Im here');
     res.render('index',{ title: 'Hello from DJJBs' , Project:'DJPProject'});

});
/*
app.get('/events', function(req,res) {
  console.log('Im here');
     res.render('Events',{ title: 'Hello from DJJB' , Project:'DJPProject'});

});



djEventRouter.route('/')    
  .get(function(req,res){
       // res.send('Hello Events here');
      res.render('Events',{ title: 'Hello from DJJB' , Project:'DJPProject'});  

  });
  */
djEventRouter.route('/event/:id')
  .get(function(req,res){
  	   var eventId= req.params.id;   
        res.send('hello single event ' + eventId);
   


  });

app.use('/addEvent',addEventRouter);
app.use('/admin',adminRouter);
app.use('/events',djEventRouter);





app.listen (port,function(req,res){
     console.log('DJ Project is runing on port' + port);


});

