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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(Cors());


var db = mongoose.connect('mongodb://localhost/DJJB');  //connecting to DJJB database

var PackModel = require('./views/Model/PackageModel');
var Events = require('./views//model/EventModel');

var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');



app.use(express.static(path.join(__dirname, 'views')));
//app.use(express.static(__dirname + '/public'));


app.use(session({secret: 'anything'}));

require('./config/passport')(app);

require('./views/Model/AccessoriesModel');
var djEventRouter = express.Router();
var djEventRouter = require('./views/routes/eventRoutes')(Events);
var addEventRouter = require('./views/routes/addAdminEvent')(Events);
var adminRouter = require('./views/routes/adminRouter');
var priceRouter = require('./views/routes/PackageRouter')(PackModel);
var auth = require('./views/routes/auth');
var users = require('./views/routes/users');


app.get('/', function (req, res) {
    console.log('Im here');
    res.render('index', {title: 'Hello from DJJBs', Project: 'DJPProject'});

});


djEventRouter.route('/event/:id')
    .get(function (req, res) {
        var eventId = req.params.id;
        res.send('hello single event ' + eventId);


    });

app.use('/addEvent', addEventRouter);
app.use('/admin', adminRouter);
app.use('/price', priceRouter);
app.use('/events', djEventRouter);
app.use('/auth', auth);
app.use('/users/', users);


app.listen(port, function (req, res) {
    console.log('DJ Project is running on port' + port);


});

