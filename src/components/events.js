var React = require('react');
var Header = require('./Header');
var Home = require('./Price');
var EventsApi = require('./EventsApi');
var EventDisplay = require('./EventList');
var Axios = require('axios');

var Events = React.createClass({



      getInitialState: function() {
          return {
              // api call to database
              EventsData: []
          };

      },

      componentDidMount :function(){
          /*console.log("Component did mounted");
          Axios.get('http://localhost:5000/events').then(function(result)
          {
              // console.log(result);

              this.setState({EventList:JSON.parse(JSON.stringify(result.data))});
                console.log(this.state.EventList);

          }.bind(this));
   */
           EventsApi.getAllEvents().then(function(result){
                 console.log(result.data);
               this.setState({EventsData:result.data});
                console.log(this.state.EventsData);


           }.bind(this))


      },

     render : function() {
          return (

         <div >

          <h1> EvetnList </h1>
       <p></p>
         
          <EventDisplay EventsData={this.state.EventsData}/>

     </div>
          );





  }	



}) ;

module.exports = Events;
