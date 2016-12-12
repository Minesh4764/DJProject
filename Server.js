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
var SENDGRID_API_KEY='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';






app.get('/', function (req, res) {
  //  console.log('Im here');

console.log('this is the key');
    res.render('index', {title: 'Hello from DJJBs', Project: 'DJPProject'});

});


app.use('/sendemail', function (req, res) {
    var helper = require('sendgrid').mail;
    //  console.log('Im here');
    from_email = new helper.Email("mineshpatel2002@gmail.com.com");
    to_email = new helper.Email("mineshpatel2002@gmail.com");
    subject = "Sending with SendGrid is Fun";
    content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
    mail = new helper.Mail(from_email, subject, to_email, content);

    var Sandgrid =require('sendgrid')(SENDGRID_API_KEY);

    var request = Sandgrid.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });


    Sandgrid.API(request, function(error, response) {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
    })

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

