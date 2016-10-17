var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Router = require('react-router');
var Link = Router.Link;
var Admin = require('./Admin')


var Events = React.createClass({


    getInitialState: function () {
        return {
            // api call to database
            EventsData: [],
            User :true /// onl if data found in mongo db




    }},
    editEvetn:function() {

        EventsApi.PostEvent().then(function(result){
            console.log(result);


        });

    },

    DeleteEvent:function(event){
      console.log(event.target.value);
      EventsApi.DeleteEvents(event.target.value).then(function (result) {
          console.log(result);

      });


    },

    componentDidMount: function () {

        EventsApi.getAllEvents().then(function (result) {
            console.log(result.data);
            this.setState({EventsData: result.data});
            console.log(this.state.EventsData);


        }.bind(this))


    },

    render: function () {

        return (

            <div >

                <h1> EventList </h1>


                <Link to = "EditEvent">Add Event</Link>
                <Admin/>



                       <EventDisplay  Admin ={this.state.User} EventsData={this.state.EventsData} onEdit={this.editEvetn} onDelete={this.DeleteEvent}/>




            </div>
        );


    }


});

module.exports = Events;
