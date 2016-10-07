import React from 'react';
import {Router,Route,IndexRoute, hashHistory } from 'react-router';
import Reactdom from 'react-dom';


var Events = require('./components/events');
var Home = require('./components/homepage');

var Pricing = require('./components/Price');


var PortFolios = require('./components/PortFolio');

var Abouts = require('./components/bout');


var Team = require('./components/team'); // this is for the team page

var Contact = require('./components/out');




Reactdom.render(
  <Router history = {hashHistory}>
      <Route path ="/" component ={Events}>
      </Route>,app)


);