var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var EventsData = React.createClass({



    getInitialState: function () {
        return {
            // api call to database
            EventData: []
        };

    },


    componentDidMount: function () {

        EventsApi.getEventsByID(this.props.params.EventId).then(function (result) {
         //  console.log(result.data);
            this.setState({EventData: [result.data]});
          //  console.log(this.state.EventData);
          // this.setState.EventData.push(href='EditEvent');

        }.bind(this))


    },

    render: function () {
        return (

            <div >

                <h1> EventList </h1>


                <table className="table">

                    <thead>
                    <th>ID </th>
                    <th>Events</th>
                    <th>Cost</th>
                    </thead>
                    <tbody>
                    <EventDisplay EventsData ={this.state.EventData} />

                    </tbody>



                </table>

            </div>
        );


    }


});

module.exports = EventsData;




