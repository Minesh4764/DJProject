


var React = require('react');
var EditForm=require('./EditForm');
var Router = require('react-router');
var EventApi = require('./EventsApi');
var SpotSearchForm = require('./spotifyForm');
var toastr = require('toastr');
var TrackDisplay = require('./TrackDisplay');

var SpotSearch = React.createClass({

    /*TopTracks: [
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"]
    ],

*/
    mixins:[
        Router.Navigation
    ],


    getInitialState: function () {
        return {
            TopTracks:{},
            tracks :false,
            Artist:"",
            // api call to database
            EventsData: [],


        }
    },



 ObjectToArray: function (obj) {
    var retArray = [];

    Object.keys(obj).forEach(function (item) {
        retArray.push(obj[item]);
    });

    return retArray;
},







    setEventStateData:function(event){
       console.log(event.target.value);
        this.setState({Artist: event.target.value});
    },
    saveEvent :function(event) {
        event.preventDefault();

        EventsApi.getTopTracks(this.state.Artist).then(function (result) {
            var Data = result.map(this.ObjectToArray);
            this.setState({

                tracks: true,
               TopTracks :Data,



            });

        }.bind(this));
    },


    render:function() {

        return (

            <SpotSearchForm
                tracks = {this.state.tracks}
                Artist={this.state.Artist}
                Change ={this.setEventStateData}
                onSave ={this.saveEvent}
                 ArtistData={this.state.TopTracks}/>

        );


    }


});
module.exports=SpotSearch;