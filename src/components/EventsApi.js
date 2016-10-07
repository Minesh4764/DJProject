// over here  i be using the api method to get the data

$ = jQuery = require('jquery');
var Axios = require('axios');

var EventsData = require('./EventData').EventsData;
var _ = require('lodash');

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item));
};


var EventsApi = {

    getAllEvents: function () {
        /* return _clone(EventsData)

         } */ // ends there

        //  Axios.ajax({url:'http://localhost:5000/events', method:'get',dataType:'json'}).done (function (data ){

        return Axios.get('http://localhost:5000/events');


    }


};
module.exports = EventsApi;