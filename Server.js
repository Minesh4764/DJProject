var express = require('express');
 var path = require('path');
 var app = express();
var Cors = require('cors');
 var cons = require('consolidate');
  var port = process.env.PORT || 5000;
   
   mongoose = require('mongoose'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(Cors());
var db = mongoose.connect('mongodb://localhost/DJJB');  //connecting to DJJB database

var Events = require('./views//model/EventModel');

var swig = require('swig');

app.engine('html',swig.renderFile);
app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'html');


/* for cross origin access
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

*/








app.use(express.static(path.join(__dirname, 'views')));
 //app.use(express.static(__dirname + '/public'));
 var djEventRouter=express.Router();
var djEventRouter = require('./views/routes/eventRoutes')(Events);
var addEventRouter = require('./views/routes/addAdminEvent')(Events);
var adminRouter = require('./views/routes/adminRouter');



app.get('/', function(req,res) {
  console.log('Im here');
     res.render('index',{ title: 'Hello from DJJBs' , Project:'DJPProject'});

});


djEventRouter.route('/event/:id')
  .get(function(req,res){
  	   var eventId= req.params.id;   
        res.send('hello single event ' + eventId);
   


  });

app.use('/addEvent',addEventRouter);
app.use('/admin',adminRouter);
app.use('/events',djEventRouter);





app.listen (port,function(req,res){
     console.log('DJ Project is running on port' + port);


});

