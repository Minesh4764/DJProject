var React = require('react');
var EventsApi = require('./EventsApi');
var PriceForm = require('./PriceForm');
var Pricing = React.createClass({


    ObjectToArray: function (obj) {
        var retArray = [];

        Object.keys(obj).forEach(function (item) {
            retArray.push(obj[item]);
        });

        return retArray;
    },
	getInitialState: function () {
		return {

			data: [],

		}
	},


	componentDidMount: function () {

		EventsApi.GetPrice().then(function (result) {
			//console.log(result.data);

			//var Data = result.data.map(this.ObjectToArray);


			this.setState({data: result.data});
			console.log(this.state.data);


		}.bind(this))


	},



	render : function() {



   return (
<PriceForm data={this.state.data}/>

	   	);


  }	



});

module.exports = Pricing;