
var React = require('react');
var EditForm=require('./EditForm');
var EventsApi = require('./EventsApi');
var Edit = React.createClass({


    getInitialState: function () {
        console.log('thisis on proce');

       alert(this.props.params.data);
        return {
            // api call to database

            EventData:this.props.data,
        };

    },


    componentDidMount: function () {

        EventsApi.getEventsByID(this.props.params.EventId).then(function (result) {
            // console.log(result.data);
            this.setState({EventData: result.data});
             console.log(this.state.EventData);
            // this.setState.EventData.push(href='EditEvent');

        }.bind(this))


    },











    setEventStateData:function(event){
        var field = event.target.name;
        var value=event.target.value;
        this.state.EventData[field] =value;
        return this.setState({EventData: this.state.EventData});

    },
    saveEvent :function(event) {
        event.preventDefault();
       // console.log(this.state.EventData);
      var Id = this.state.EventData._id;
      /*  var data = {
         "Typeofevent" :this.state.Typeofevent,
         "AverageCost" :this.state.AverageCost,
         "Place" : this.state.Place
         };

        */

        EventsApi.EditEvents(Id,this.state.EventData);


    },

    render:function() {

        return (
            <EditForm

                EventData={this.state.EventData}
                onChange ={this.setEventStateData}
                onSave ={this.saveEvent}/>
        );


    }


});
module.exports=Edit;