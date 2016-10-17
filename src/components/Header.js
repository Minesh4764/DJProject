
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav color ="blue" className="navbar navbar-default">
                <div className="container-fluid">

                    <ul className="nav navbar-nav">
                        <li><Link to="Home">Home</Link></li>
                        <li><Link to="AboutUs">About-us</Link></li>
                        <li><Link to="Price"></Link></li>
                        <li><Link to="PortFolio">Portfolio</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                        <li><Link to="Team">Team</Link></li>

                        <li><Link to="Events">Events</Link></li>

                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;

