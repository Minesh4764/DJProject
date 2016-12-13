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


    },

    render: function () {
        return (
            <div id="pricing" className="color blue">


                <div className="container">


                    <div className="wrapper span12">

            <div className ="panel-primary class">
                <div className="panel-heading">
                    <h3 className ="panel-title"> {this.props.data[0].TypeofPackage}</h3>
                </div>

                <div className ="panel-body" >
                    <div className ="row">
                        <div className="col-md-4">
                            <div><img className="thumbnail" src="img/Minesh.jpg"  style ={{width:"100%"}}/></div>

                        </div>
                        <div className="color blue">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary"> Repos</span>
                                    <span className="label label-success">Gists</span>
                                    <span className="label label-info">Followers</span>
                                    <span className="label label-">Following</span>


                                </div>
                            </div>
                            <hr />
                            <div className = "row">

                                <div className="col-md-12">

                                    <ul id ="FntColor">
                                        <li  className ="list-group-item"> <strong >Cost:</strong> {this.props.data[0].BasicCost}</li>
                                        <li className ="list-group-item"> <strong>Desciption</strong> {this.props.data[0].Description}</li>
                                        <li className ="list-group-item"> <strong>For No of People</strong>{this.props.data[0].ForNoOFPeople}</li>

                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a className ="btn btn-primary" target="_blank" href =""> Visit Profile </a>
                        </div></div>
                    </div>



                </div>
            </div>
                    </div></div></div>


        );


    }


});

module.exports = PriceConfirm;