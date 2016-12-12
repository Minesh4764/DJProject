var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PriceForm =React.createClass({



    ButtonMinus:function(item) {
        if(item.originalVal >item.noOfAccesory) {
            return null;
        }
        return (

            <button className="btn btn-primary"    type ="button"> Search</button>
        );

    },

    renSearch :function (Event) {

    var Save = this.props.Save;

        return (
            <div>
                {Event.map(function(ignore,index) {
                    console.log(Event[index]);
                       var Cost =  Event[index].BasicCost;
                        if(this.props.lEdit!==null && this.props.lEdit.ID ==Event[index]._id) {
                            var Cost = Event[index].BasicCost + this.props.lEdit.Price ;
                        };

                    return(
                        <div className="span3">
                            <div className="pricing-table">
                                <div className="color-cccddd">
                                    <h3>{Event[index].TypeofPackage}</h3>
                                    <h4><span className="price"></span> <span className="time">{Cost}</span>
                                    </h4>
                                        <ul key={index}>
                                            {Event[index].Extras.map(function(obj,idx) {
                                                return (
                                                    obj.map(function (item,id) {
                                                        if (item.originalVal < item.noOfAccesory) {
                                                           // var htmlbut = <button className='btn btn-primary'    type ='button'> Search</button>;
                                                            var htmlbut = <button type='button' data-row =  {idx} onClick={Save}  value ={[item.Price+":@"+ Event[index]._id]} className='btn btn-default'><span className='glyphicon glyphicon-minus'></span> </button>

                                                        }
                                                       return <li  data-val = {[item.Price]} data-row={idx} key={idx} value ={[item.Price]}> <button className="btn btn-default"  data-row={idx} onClick={Save} key={id} value ={[item.Price+":"+ Event[index]._id]}type="button"> <span className='glyphicon glyphicon-plus'></span> </button>{item.noOfAccesory} :{item.Accesory}{htmlbut};</li>

                                                    }));
                                            }.bind(this))}

                                        </ul>
                                   <Link to ={"/Edit/" + Event[index]} className="buy">buy</Link>
                                </div>
                            </div>
                        </div>
                    );

                }.bind(this))}
            </div>);
    },

    render: function () {

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

                            <div className="row-fluid"></div>

                        </div>

                    </div>


                </div>


            </div>

        );

    },
});

module.exports=PriceForm;
