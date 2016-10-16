var express = require('express');
 var path = require('path');
 var app = express();
var Cors = require('cors');
 var cons = require('consolidate');
  var port = process.env.PORT || 5000;
   
   mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({

    clientID :'738561098335-1b45labdu6puk09i2o7td4p93utbb3fb.apps.googleusercontent.com',
    clientSecret:'2jqUw8YLuy-eLcp71GLwSArF',
    callbackURL: 'http://localhost:5000/auth/google/callback'},
    function(req,accesssToken,refreshToken,profile,done) {
        done(null,profile);

        //

    }


    ));


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



app.use(session({secret:'anything'}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){
    done(null,user)


});

passport.deserializeUser(function(user,done){
//user.findbyid(id);
    done(null,user)

});


 var djEventRouter=express.Router();
var djEventRouter = require('./views/routes/eventRoutes')(Events);
var addEventRouter = require('./views/routes/addAdminEvent')(Events);
var adminRouter = require('./views/routes/adminRouter');
var auth =require('./views/routes/auth');
var users = require('./views/routes/users');


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
app.use('/auth',auth);
app.use('/users/',users);




app.listen (port,function(req,res){
     console.log('DJ Project is running on port' + port);


});

