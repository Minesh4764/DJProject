var React = require('react');
var EventsApi = require('./EventsApi');
var update = require('react-addons-update');
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
            newData: null,
            data: [],
            lEdit: null,
            originalval:null,


        }
    },


    Save: function (e) {


          var minus = false;


        var Rid = parseInt(e.target.dataset.row, 10);

        var value = e.target.value;
        var n = value.indexOf(":");
        var Price = value.substr(0, n);
        if (value.indexOf("@") > 0) {
            minus = true;
            var Id = value.substr(n+2);
        }
        else{

            var Id = value.substr(n + 1);
        }



       // console.log(this.state.data);


        var packages = this.state.data.slice();
        var ChoosePackage = null;

        for (var i = 0; i <= packages.length; i++) {
            var newdata = null;
            newdata = this.state.data.slice();
            console.log(newdata.id);
            if (packages[i]._id == Id) {
                console.log("im here");

              //  ChoosePackage.push(packages[i]);
               // console.log(ChoosePackage);
               // var newPackage = ChoosePackage.slice();
               // console.log(newPackage);

               var val = parseInt(newdata[i].Extras[Rid][0].Price);
                var originalval = newdata[i].Extras[Rid][0].noOfAccesory;
              if (minus) {
                  newdata[i].BasicCost -= val;
                  newdata[i].Extras[Rid][0].noOfAccesory -= 1;
              } else
              {

                  newdata[i].BasicCost += val;
                  newdata[i].Extras[Rid][0].noOfAccesory += 1;

              }

              if( typeof newdata[i].Extras[Rid][0].originalVal=== "undefined") {

                  newdata[i].Extras[Rid][0].originalVal = originalval;
              }


               // console.log(newPackage);
                this.setState({data: newdata});
                console.log("after changes");
                console.log(this.state.data);
                return;
            }


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


    render: function () {


        return (
            <PriceForm data={this.state.data} Save={this.Save} lEdit={this.state.lEdit}/>

        );


    }


});

module.exports = Pricing;