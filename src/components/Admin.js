var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
EventsApi = require('./EventsApi');
var Admin = React.createClass({


    getInitialState: function () {
        return {
            // api call to database
           // EventsData: []

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



                <button className="btn btn-default" type="button" ><a href="http://www.localhost:5000/auth/google"> Log in as Admin</a></button>



            </div>
        );


    }


});

module.exports = Admin;
