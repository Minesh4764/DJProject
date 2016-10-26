var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Router = require('react-router');
var Link = Router.Link;
var Admin = require('./Admin')


var Events = React.createClass({
 Headers : ["Ids","EVENTS","AverageCost"],

    getInitialState: function () {
        return {
            // api call to database
            EventsData: [],
            User :true,/// onl if data found in mongo db
           SortBy:null,
            descending:false,

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

    sorting :function(e){

    var Column =e.target.cellIndex;
    var Data = this.state.EventsData.slice();
        var descending = this.state.SortBy===Column && !this.state.descending;
    Data.sort(function(a,b){
         return descending
        ? (a[Column] <b[Column] ? 1: -1)
             :(a[Column] > b[Column] ? 1: -1);

    });
    this.setState({
        EventsData : Data,
        SortBy:Column,
       descending:descending,
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



                       <EventDisplay sortby={this.state.SortBy} descending={this.state.descending} Header ={this.Headers} Admin ={this.state.User} EventsData={this.state.EventsData} onSort ={this.sorting} onEdit={this.editEvetn} onDelete={this.DeleteEvent}/>




            </div>
        );


    }


});

module.exports = Events;
