var React = require('react');
var Router = require('react-router');

var PriceConfirm = React.createClass({



    getInitialState: function () {
        return {
            // api call to database

        };

    },


    componentDidMount: function () {
     console.log('this is the data');

        console.log(this.props.params.data);

    },

    render: function () {
        return (

            <div >

                <h1> EventList </h1>


            </div>
        );


    }


});

module.exports = PriceConfirm;