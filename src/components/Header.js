var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (

            <div className="container">


                <div className="row-fluid">

                    <div className="navigation">

                        <div className="navbar navbar-fixed-top">
                            <div className="navbar-inner">
                                <a className="btn btn-navbar btnOverlay" data-toggle="collapse"
                                   data-target=".nav-collapse">
                                    menu
                                </a>
                                <div className="nav-collapse collapse">
                                    <ul className="nav">

                                        <li><Link to="Home">Home</Link></li>
                                        <li><Link to="AboutUs">About-us</Link></li>
                                        <li><Link to="Price">Price</Link></li>
                                        <li><Link to="PortFolio">Portfolio</Link></li>
                                        <li><Link to="Contact">Contact</Link></li>
                                        <li><Link to="Team">Team</Link></li>

                                        <li><Link to="Events">Eventss</Link></li>
                                        <li><Link to="Search">Search</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </div>

        );
    }
});

module.exports = Header;

