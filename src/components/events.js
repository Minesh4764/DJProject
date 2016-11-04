var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Router = require('react-router');
var Link = Router.Link;
var Admin = require('./Admin')


var Events = React.createClass({
    Headers: ["Ids", "EVENTS", "AverageCost", "cost", "cost", "cost"],



    getInitialState: function () {
        return {
            // api call to database
            data: null,
            EventsData: [],
            User: false,/// onl if data found in mongo db
            SortBy: null,
            descending: false,
            edit: null,
            Search: false,

        }
    },
    editEvetn: function () {

        EventsApi.PostEvent().then(function (result) {
            //      console.log(result);


        });

    },

    DeleteEvent: function (event) {
        // console.log(event.target.value);
        EventsApi.DeleteEvents(event.target.value).then(function (result) {
            // console.log(result);

        });


    },

    sorting: function (e) {

        var Column = e.target.cellIndex;
        var Data = this.state.EventsData.slice();
        var descending = this.state.SortBy === Column && !this.state.descending;
        Data.sort(function (a, b) {
            return descending
                ? (a[Column] < b[Column] ? 1 : -1)
                : (a[Column] > b[Column] ? 1 : -1);

        });
        this.setState({
            EventsData: Data,
            SortBy: Column,
            descending: descending,

        });
    },


    Edit: function (e) {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex,


            }
        });

        console.log(this.state.edit);
    },


    adminOnchange: function (event) {

        var field = event.target.name;
        var value = event.target.value;

        console.log(field + "value is =  " + value);

        //  return this.setState({EventData: this.state.EventData});

    },


    Save: function (e) {
        e.preventDefault();
        console.log('i m in save');
        //   var input = e.target.firstChild;
        //  console.log("this is the input" + input);
        // console.log(data[this.state.edit.row][0])
        var data = this.state.EventsData.slice();

        console.log(data);
        data[this.state.edit.row][this.state.edit.cell] = e.target.value;
        var id = data[this.state.edit.row][0];
        console.log(id);
        console.log(data);
        //Push into an array and do batch update or single update
        /*var DataTobepost:{
         Id: id,
         AverageCost:data[this.state.Edit.row][1];
         Accordingly post the date or


         }*/
        // EventsApi.PostEvent()

        this.setState({
            edit: null,
            EventsData: data,
        });
    },


    BeforeSearchData: null,

    SearchField: function () {
        if (this.state.Search) {
            this.setState({
                data: this.BeforeSearchData,
                Search: false,
            });
            this.BeforeSearchData = null;
        } else {
            this.BeforeSearchData = this.state.EventsData;

            this.setState({
                Search: true,
            });
        }
    },

    SearchData: function (e) {
        var toSerach = e.target.value.toLowerCase();
        if (!toSerach) {
            this.setState({
                EventsData: this.BeforeSearchData
            });
            return;
        }
        var Index = e.target.dataset.idx;
        var SrchData = this.BeforeSearchData.filter(function (row) {
            return row[Index].toString().toLowerCase().indexOf(toSerach) > -1;

            console.log(SrchData);
        });
        this.setState({EventsData: SrchData});
        //


    },

    ObjectToArray: function (obj) {
        var retArray = [];

        Object.keys(obj).forEach(function (item) {
            retArray.push(obj[item]);
        });

        return retArray;
    },
    componentDidMount: function () {

        EventsApi.getAllEvents().then(function (result) {
            //console.log(result.data);

            var Data = result.data.map(this.ObjectToArray);


            this.setState({EventsData: Data});
            console.log(this.state.EventsData);


        }.bind(this))


    },

    render: function () {

        return (

            <div >


                <Link to="EditEvent">Add Event</Link>
                <Admin/>


                <EventDisplay startSearch={this.SearchField} search={this.state.Search} SearchData={this.SearchData}
                              onEditAdmin={this.adminOnchange} sortby={this.state.SortBy} Save={this.Save}
                              edit={this.state.edit} descending={this.state.descending} Edit={this.Edit}
                              Header={this.Headers} Admin={this.state.User} EventsData={this.state.EventsData}
                              onSort={this.sorting} onEdit={this.editEvetn} onDelete={this.DeleteEvent}/>


            </div>
        );


    }


});

module.exports = Events;
