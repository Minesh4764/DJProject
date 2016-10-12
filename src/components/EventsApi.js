// over here  i be using the api method to get the data

$ = jQuery = require('jquery');
var Axios = require('axios');


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


    },




getEventsByID:function (ID) {

        return Axios.get('http://localhost:5000/events/'+ID);

    },
PostEvent :function(data) {

  /* var data = {
       "Typeofevent" :"Adding with Vincent",
       "AverageCost" :600,
       "Place" :"Community Hall"
   };*/
    return Axios.post('http://localhost:5000/events',data)


},
    EditEvents : function(id,data){
console.log(id);

console.log(data)
    return Axios.put('http://localhost:5000/events/'+id,data)

    },
    DeleteEvents :function(ID) {

        return Axios.delete('http://localhost:5000/events/'+ID);

}




};
module.exports = EventsApi;