var React = require('react');


var PriceForm =React.createClass({

    ObjectToArray: function (obj) {
        var retArray = [];

        Object.keys(obj).forEach(function (item) {
            retArray.push(obj[key]+":"+obj[item]);
        });

        return retArray;
    },

    renSearch :function (Event) {

        return (
            <div>
                {Event.map(function(ignore,index) {

                    Object.keys(Event[index].Accessory).forEach(function(key) {
                        console.log(key, Event[index].Accessory[key]);
                    });

                    return(
                        <div className="span3">
                            <div className="pricing-table">

                                <div className="color-cccddd">
                                    <h3>{Event[index].Name}</h3>
                                    <h4><span className="price"></span> <span className="time">per month</span>
                                    </h4>
                                    <ul>
                                        {Event[index].Equipment.map(function(ignore,idx) {
                                            return(
                                                <li><form ><input  otype='Button' placeholder='Add'/>Add</form>



                                                    {Event[index].Equipment[idx]}</li>
                                            );
                                            })};
                        </ul>

                                    <a href="#" className="buy"><span>Buy</span></a>
                                </div>
                            </div>g
                        </div> );


                }.bind(this))}
            </div>);
    },

    render: function () {
//console.log(this.props.data[1].Equipment);
  //  var Newdata =this.ObjectToArray(this.props.data[0].Accessory);
  // console.log(Newdata);
        return (


            <div id="pricing" className="color blue">


                <div className="container">


                    <div className="wrapper span12">


                        <div id="page-title">

                            <div id="page-title-inner">

                                <h2><span>Price</span></h2>

                            </div>

                        </div>


                        <div className="four-tables">


                            <div className="row-fluid">

                                {this.renSearch(this.props.data,this)}


                            </div>

                        </div>

                    </div>


                </div>


            </div>

        );

    },
});

module.exports=PriceForm;
