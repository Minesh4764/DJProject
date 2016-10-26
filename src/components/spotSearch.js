


var React = require('react');
var EditForm=require('./EditForm');
var Router = require('react-router');
var EventApi = require('./EventsApi');
var SpotSearchForm = require('./spotifyForm');
var toastr = require('toastr');
TrackDisplay = require('./TrackDisplay');
var SpotSearch = React.createClass({

    mixins:[
        Router.Navigation
    ],




    getInitialState: function () {
        return {
            tracks :false,
            Artist:"",
            // api call to database
            EventsData: []

        }
    },
    setEventStateData:function(event){
       console.log(event.target.value);
        this.setState({Artist: event.target.value});
    },
    saveEvent :function(event) {
        event.preventDefault();
        alert("Text field value is: '" + this.state.Artist + "'");
        console.log(this.state.Artist);
         EventApi.getTopTracks(this.state.Artist);

        EventsApi.getTopTracks(this.state.Artist).then(function (result) {
          //  console.log(result.data.artists.items);
            if(result) {
                this.state.tracks = true;

            }
           this.setState({EventsData: result.data.artists.items});
            console.log(this.state.EventsData);


        }.bind(this))



        // EventApi.PostEvent(this.state.EventData);
        //toastr.success('Event Saved');
       // this.transitionTo('Events');


    },

    render:function() {

        return (

            <SpotSearchForm
                Artist={this.state.Artist}
                Change ={this.setEventStateData}
                onSave ={this.saveEvent}/>





        );


    }


});
module.exports=SpotSearch;