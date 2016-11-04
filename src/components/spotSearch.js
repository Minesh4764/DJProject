


var React = require('react');
var EditForm=require('./EditForm');
var Router = require('react-router');
var EventApi = require('./EventsApi');
var SpotSearchForm = require('./spotifyForm');
var toastr = require('toastr');
var TrackDisplay = require('./TrackDisplay');

var SpotSearch = React.createClass({

    TopTracks: [
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],
        ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"]
    ],


    mixins:[
        Router.Navigation
    ],


    getInitialState: function () {
        return {
            tracks :false,
            Artist:"",
            // api call to database
            EventsData: [],


        }
    },
    setEventStateData:function(event){
       console.log(event.target.value);
        this.setState({Artist: event.target.value});
    },
    saveEvent :function(event) {
        event.preventDefault();
      //   alert("Text field value is: '" + this.state.Artist + "'");
        // console.log(this.state.Artist);
        // EventApi. getTopTracks(this.state.Artist);

       //  EventsApi.getTopTracks(this.state.Artist).then(function (result) {
             // console.log("this is the result");
         //     console.log("this is thedata"+ result);
           //  console.log(Data);


        this.setState({

            tracks: true,


        });
    },


        // EventApi.PostEvent(this.state.EventData);
        //toastr.success('Event Saved');
       // this.transitionTo('Events');




    render:function() {

        return (

            <SpotSearchForm
                tracks = {this.state.tracks}
                Artist={this.state.Artist}
                Change ={this.setEventStateData}
                onSave ={this.saveEvent}
                 ArtistData={this.TopTracks}/>

        );


    }


});
module.exports=SpotSearch;