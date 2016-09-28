
$ = require('jquery');
//alert("testing linting")
//test = 1;

var React = require('react');
//var Home = require('./components/homepage');
var Events = require('./components/events');
var Home = require('./components/homepage');

var Pricing = require('./components/Price');


var PortFolios = require('./components/PortFolio');

var Abouts = require('./components/bout');


var Team = require('./components/team'); // this is for the team page

var Contact = require('./components/out'); 

    





               	
      

React.render(<Home/>,document.getElementById('app'));

React.render(<Events/>,document.getElementById('events'));
React.render(<Pricing/>,document.getElementById('Price'));
React.render(<PortFolios/>,document.getElementById('PortFolio'));
React.render(<Abouts/>,document.getElementById('AboutusDiv'));
React.render(<Team/>,document.getElementById('Team'));
React.render(<Contact/>,document.getElementById('DjContact'));