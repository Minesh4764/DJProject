var React = require('react');


var PriceForm =React.createClass({

    renSearch :function (Event) {

        return (
            <div>
                {Event.map(function(ignore,index) {


                    return(
                        <div className="span3">
                            <div className="pricing-table">

                                <div className="color-cccddd">
                                    <h3>{Event[index].Name}</h3>
                                    <h4><span className="price">€9.99</span> <span className="time">per month</span>
                                    </h4>
                                    <ul>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                        <li>Custom option</li>
                                    </ul>
                                    <a href="#" className="buy"><span>Buy</span></a>
                                </div>
                            </div>
                        </div> );

                }.bind(this))}
            </div>);
    },

    render: function () {
console.log(this.props.data);

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
