


var React = require('react');
var EditForm=require('./EditForm');
var Router = require('react-router');
var SpotApi = require('./SpotApi');
var SpotSearchForm = require('./spotifyForm');
var toastr = require('toastr');
var SpotSearch = React.createClass({

    mixins:[
        Router.Navigation
    ],

    getInitialState: function () {
        return {
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