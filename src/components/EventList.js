var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EventList = React.createClass({

    _download: function(format, ev) {
        var contents = format === 'json'
            ? JSON.stringify(this.props.EventsData)
            : '';

        var URL = window.URL || window.webkitURL;
        var blob = new Blob([contents], {type: 'text/' + format});
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = 'data.' + format;
    },

    renSearch:function() {
        if(!this.props.search){
            return null;
        }
        return (
            <tr onChange={this.props.SearchData}>{this.props.Header.map(function (anyvalue, idx) {


                    return (
                        <td key={idx}><input type='text'   data-idx={idx}/></td>
                    );
                })
            }</tr>
            )

    },


            render: function () {


              //  console.log(this.props.EventsData);
/*
        var createEventRow = function (Event) {

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
         //  {this.props.EventsData.map(createEventRow, this)}

         var SingleEventRow =      (<tr key = {this.props.EventData._id}>
         <td> <Link to ={"/EditEvent/" + this.props.EventData._id}>{this.props.EventData._id}</Link></td>
         <td>{this.props.EventData.Place}  </td>
         <td> {this.props.EventData.AverageCost} </td>
         </tr>)

                 /*
         {this.props.EventsData.map(function(row,index) {

         return (
         <tr key={index}>{row} {row.map(function(cell, index) {
         return(
         <td key={index}>{cell}</td>;


         })}
         </tr>
         );
         })}
        </tbody>
        </table>
        </div>
     <th className={this.props.Admin ? "" : "hidden"}>Edit</th>
         {this.props.EventsData.map(function(row,index) {
         return (
         <tr key={index}>
         {row.map(function(cell, index) {

         return <td key={index}>{cell}
         </td>;
         })}
         </tr>
         );
         })}
        */


        return (
            <div>
                <div className="toolbar">
                <a onClick={this._download.bind(this, 'json')}
                   href="data.json">Export JSON</a>
                    <a onClick={this._download.bind(this, 'csv')}
                       href="data.csv">Export CSV</a>
                </div>

                    <button className="btn btn-primary" onClick={this.props.startSearch} type="button"> Search</button>

                <table className="table table-striped">

                    <thead onClick={this.props.onSort}>
                    <tr>
                        {this.props.Header.map(function(title,index){
                            if(this.props.sortby===index) {

                                title +=this.props.descending ? '\u2191' :'\u2193'
                            }
                            return(

                                <th key={index} >{title}</th>
                                );
                            }.bind(this))
                        }


                    </tr>
                    </thead>
                    <tbody onDoubleClick={this.props.Edit}>
                      {this.renSearch()}
                    {this.props.EventsData.map(function(row,rowid) {
                      // console.log(row);
                        return (
                            <tr key={rowid}>{
                                row.map(function(cell, index) {
                                    var content  =cell;
                                    var edit = this.props.edit;
                                     //   console.log(this.props.edit.row);



                                        if (this.props.edit!==null && this.props.edit.row ===rowid && this.props.edit.cell===index ) {


                                            return (
                                                <form onSubmit={this.props.Save}><input name={this.props.Header[index]} onBlur={this.props.Save} onChange={this.props.onEditAdmin} type='text'
                                                                                         placeholder={content}/></form>

                                            );

                                        };


                             return (<td onChange={this.props.onEditAdmin} name={this.props.Header[index]} key={index} data-row={rowid}>{content}</td>);

                           }.bind(this))}
                            </tr>
                        );
                    }.bind(this))}
                    </tbody>
                </table>
            </div>


        );


    }


});
module.exports = EventList;