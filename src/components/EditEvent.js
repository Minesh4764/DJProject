
var React = require('react');
var EditForm=require('./EditForm');
var Router = require('react-router');
var EventApi = require('./EventsApi');
var toastr = require('toastr');
var EditEvent = React.createClass({

    mixins:[
      Router.Navigation
    ],

   getInitialState:function () {
       return{

         EventData:{Typeofevent:'', Place:'',AverageCost:''}

       };
   },
    setEventStateData:function(event){
      var field = event.target.name;
        var value=event.target.value;
       this.state.EventData[field] =value;
         return this.setState({EventData: this.state.EventData});

    },
    saveEvent :function(event) {
        event.preventDefault();
        console.log(this.state.EventData);
        EventApi.PostEvent(this.state.EventData);
       toastr.success('Event Saved');
        this.transitionTo('Events');


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
module.exports=EditEvent;