// over here  i be using the api method to get the data
$=jQuery=require('jquery');

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
//console.log(id);

//console.log(data)
    return Axios.patch('http://localhost:5000/events/'+id,data)

    },
    DeleteEvents :function(ID) {



},
    getTopTracks :function(Artist) {
        var P = new Promise(function(resolve,reject){

            $.ajax({
                url: "https://api.spotify.com/v1/search?q=" + Artist + "&type=artist",

                success: function (data) {
                  //  console.log(data);
                    var artist;

                    for (var i = 0; i < data.artists.items.length; i++) {

                        //pick the right artist & assign artist if conditions are good
                        if (Artist.toUpperCase().trim() == data.artists.items[i].name.toUpperCase().trim()) {

                            artist = data.artists.items[i];
                          //  console.log(artist);
                        }


                    }

                    $.ajax({
                        url: "https://api.spotify.com/v1/artists/" + artist.id + "/top-tracks?country=US",

                        success: function (data) {
                         //   console.log(data);

                            resolve(data.tracks);
                        },



                        error: function (error) {
                            console.log(error)

                            console.log("There has been an error receiving data from Spotify - please make sure artist name is spelled correctly.");
                        }
                    });

                }});



                }

                );
        return P;



            },



             //   return Axios.get('https://api.spotify.com/v1/search?q='+ Artist + '&type=artist');
      /* Axios.get('https://api.spotify.com/v1/search?q=' + Artist + '&type=artist').then(function(data) {
           console.log(data.data.artists);


           for (var i = 0; i < data.data.artists.items.length; i++) {
               if (Artist.toUpperCase().trim() == data.data.artists.items[i].name.toUpperCase().trim()) {

                   artist = data.data.artists.items[i].id;
               }


           }
           console.log("thsi is artistid" + artistid);
               return Axios.get('https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/top-tracks?country=US');



       }

       )*/







};
module.exports = EventsApi;