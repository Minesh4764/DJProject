var React = require('react');
var Home = require('../components/homepage');



var Header = require('../components/Header');

var Price = require('../components/Price');
RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');




var App = React.createClass({

   render:function () {
       return (
        <div>


            <Header/>
            <RouteHandler/>

        </div>


       );
   }



});
module.exports =App;