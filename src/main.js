$ = require('jquery');
//alert("testing linting")
//test = 1;
var React = require('react');
var Router = require('react-router');
//var Route,Router,IndexRoute,hashHistory = require('react-router');
var Reactdom = require('react-dom');
var routes = require('./routes');

//var Home = require('./components/homepage');
var Events = require('./components/events');
var Home = require('./components/homepage');

var Pricing = require('./components/Price');


var PortFolios = require('./components/PortFolio');

var Abouts = require('./components/bout');

var App = require('./components/app');
var Team = require('./components/team'); // this is for the team page

var Contact = require('./components/out');

var Auth = require('./components/Admin');


Router.run(routes,   Router.HistoryLocation, function (Handler) {
    Reactdom.render(<Handler/>, document.getElementById('app'));


});

/*
 Reactdom.render(<App/>,document.getElementById('app'));

 Reactdom.render(<Events/>,document.getElementById('events'));
 Reactdom.render(<Pricing/>,document.getElementById('Pricing'));
 Reactdom.render(<PortFolios/>,document.getElementById('PortFolio'));
 Reactdom.render(<Abouts/>,document.getElementById('AboutusDiv'));
 Reactdom.render(<Team/>,document.getElementById('Team'));
 Reactdom.render(<Contact/>,document.getElementById('DjContact')); */