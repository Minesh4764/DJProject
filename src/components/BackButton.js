var React = require('react');
var Router = require('react-router');



var BackButton = React.createClass({
    render: function() {
        return (
            <button
                className="button icon-left"
                onClick={Router.goBack}>
                Back
            </button>
        );
    }
});
module.exports = BackButton;