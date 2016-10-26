var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EventList = React.createClass({


    render: function () {

        var createEventRow = function (Event) {

            return (


                <tr key={Event._id}>
                    <td><Link to={"/EventsData/" + Event._id}>{Event._id}</Link></td>
                    <td>{Event.Place}  </td>
                    <td> {Event.AverageCost} </td>

                    {(function(p)
                        {
                            if (p.props.Admin==true) {

                                return(

                                    <td><Link to={"/Edit/" + Event._id}>
                                        <button className="btn btn-default" type="button"> Edit</button>
                                    </Link></td>


                                )



                            }
                            else{
                                return(

                                    <td></td>


                                )


                            }

                        }

                    )(this)}



                    {(function(p)
                        {
                            if (p.props.Admin==true) {

                                return(


                                    <td>
                                        <button className="btn btn-default" type="button" value={Event._id}
                                                onClick={p.props.onDelete}> Delete
                                        </button>
                                    </td>


                                )



                            }
                            else{
                                return(

                                    <td></td>


                                )


                            }

                        }

                    )(this)}






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


                <table className="table">

                    <thead>
                    <tr>
                        {this.props.Header.map(function(title){
                            return(

                              <th>{title}</th>
                            );



                        })}

                        <th className= {this.props.Admin ? "" :"hidden"}>Edit</th></tr>
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