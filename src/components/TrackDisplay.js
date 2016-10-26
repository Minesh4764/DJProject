var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TrackDisplay = React.createClass({


    render: function () {




    var createEventRow = function (Event) {


        //console.log(this.props.Admin);
        return (


            <tr key={Event.url}>
                <td><Link to={"/EventsData/" + Event.url}>{Event.url}</Link></td>
                <td>{Event.url}  </td>
                <td> {Event.url} </td>


                <td ><Link to={"/Edit/" + Event.url}>
                    <button className="btn btn-primary" type="button"> Edit</button>
                </Link></td>


                <td>
                    <button className="btn btn-warning" type="button">

                    </button>
                </td>

            </tr>
        );


    };

    return (
        <div>


            <table className="table table-striped">

                <thead>
                <tr>
                    <th>ID</th>
                    <th>Events</th>
                    <th>Cost</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>

                {this.props.EventsData.map(createEventRow, this)}


                </tbody>

            </table>
        </div>

    );


}

    });
module.exports =TrackDisplay;