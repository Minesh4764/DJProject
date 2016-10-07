var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EventList= React.createClass({




    render:function() {

        var createEventRow=function(Event) {

            return (
                <tr key = {Event._id}>
                    <td> <Link to ={"/EventsData/" + Event._id}>{Event._id}</Link></td>
                    <td>{Event.Place}  </td>
                    <td> {Event.AverageCost} </td>
                </tr>
            );


        };
        return(
            <div>


                <table className="table">

                    <thead>
                    <th>ID </th>
                    <th>Events</th>
                    <th>Cost</th>
                    </thead>
                    <tbody>

                    {this.props.EventsData.map(createEventRow,this)}
                    </tbody>



                </table>
            </div>



        );




    }




});
module.exports = EventList;