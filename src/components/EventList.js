var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EventList = React.createClass({


    render: function () {

        var createEventRow = function (Event) {
            console.log(this.props.Admin);
            return (


                <tr key={Event._id}>
                    <td><Link to={"/EventsData/" + Event._id}>{Event._id}</Link></td>
                    <td>{Event.Place}  </td>
                    <td> {Event.AverageCost} </td>


                    <td className={this.props.Admin ? "" : "hidden"}><Link to={"/Edit/" + Event._id}>
                        <button className="btn btn-primary" type="button"> Edit</button>
                    </Link></td>


                    <td className={this.props.Admin ? "" : "hidden"}>
                        <button className="btn btn-warning" type="button" value={Event._id}
                                onClick={this.props.onDelete}> Delete
                        </button>
                    </td>

                </tr>
            );


        };

        /*
         var SingleEventRow =      (<tr key = {this.props.EventData._id}>
         <td> <Link to ={"/EditEvent/" + this.props.EventData._id}>{this.props.EventData._id}</Link></td>
         <td>{this.props.EventData.Place}  </td>
         <td> {this.props.EventData.AverageCost} </td>
         </tr>)
         */


        return (
            <div>


                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Events</th>
                        <th>Cost</th>
                        <th className={this.props.Admin ? "" : "hidden"}>Edit</th>
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
module.exports = EventList;