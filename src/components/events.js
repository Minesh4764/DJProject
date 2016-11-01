var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Router = require('react-router');
var Link = Router.Link;
var Admin = require('./Admin')


var Events = React.createClass({
 Headers : ["Ids","EVENTS","AverageCost","cost","cost","cost"],

     data : [
         ["Ids","EVENTS","AverageCost","cost","cost","cost"],
         ["Ids","EVENTS","AverageCost","cost","cost","cost"],
         ["Ids","EVENTS","AverageCost","cost","cost","cost"],
         ["Ids","EVENTS","AverageCost","cost","cost","cost"]
    ],

    getInitialState: function () {
        return {
            // api call to database
            data:null,
            EventsData: [],
            User :false,/// onl if data found in mongo db
           SortBy:null,
            descending:false,
            edit:null,

    }},
    editEvetn:function() {

        EventsApi.PostEvent().then(function(result){
      //      console.log(result);


        });

    },

    DeleteEvent:function(event){
     // console.log(event.target.value);
      EventsApi.DeleteEvents(event.target.value).then(function (result) {
         // console.log(result);

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
    ObjectToArray:function(obj){
        var retArray=[];

        Object.keys(obj).forEach(function (item) {
           retArray.push(obj[item]);
        });

        return retArray;
    },

    Edit :function(e) {
     this.setState({edit:{
         row:parseInt(e.target.dataset.row,10),
         cell:e.target.cellIndex,


     }});

  console.log(this.state.edit);
    },





    Save: function(e) {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null,
            data: data,
        });
    },


componentDidMount: function () {

        EventsApi.getAllEvents().then(function (result) {
           //console.log(result.data);

            var Data = result.data.map(this.ObjectToArray);


            this.setState({EventsData :Data});
          console.log(this.state.EventsData);


        }.bind(this))


    },

    render: function () {

        return (

            <div >



                <Link to = "EditEvent">Add Event</Link>
                <Admin/>



                       <EventDisplay sortby={this.state.SortBy} Save ={this.Save} edit ={this.state.edit} descending={this.state.descending} Edit ={this.Edit} Header ={this.Headers} Admin ={this.state.User} EventsData={this.state.EventsData} onSort ={this.sorting} onEdit={this.editEvetn} onDelete={this.DeleteEvent}/>




            </div>
        );


    }


});

module.exports = Events;
