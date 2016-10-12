var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Router = require('react-router');
var Link = Router.Link;

var Events = React.createClass({


    getInitialState: function () {
        return {
            // api call to database
            EventsData: []

        };

    },
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
                <p></p>
                <Link to = "EditEvent">EditEvent</Link>

                <button className="btn btn-default" type="button" onClick={this.editEvetn}> Edit</button>

                <EventDisplay EventsData={this.state.EventsData} onDelete={this.DeleteEvent}/>

            </div>
        );


    }


});

module.exports = Events;
