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
  Buy :function(e){
        console.log(this.state.data);
       alert('ready to save');
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
    ConfirmOrder: function (e) {
        e.preventDefault();
        console.log('i m in save');

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
            <PriceForm Buy ={this.ConfirmOrder} data={this.state.data} Save={this.Save} lEdit={this.state.lEdit}/>

        );


    }


});

module.exports = Pricing;