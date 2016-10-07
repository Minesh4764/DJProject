var React = require('react');



var EventsData = React.createClass({




    render:function() {

        return(
            <div>
                <h1> SingleEvent</h1>
           <p>{this.props.params.EventId}</p>

            </div>



        );




    }




});
module.exports = EventsData;