var React = require('react');

var PriceConfirm =React.createClass({
    render: function () {

        return (

            <form>
                <h1>Please Confirm your order as this will be consider as final and the DJJB will be notified about this Event</h1>
                <h2>{this.props.Typeofevent}</h2>

                <label htmlFor="Typeofevent">TypeOfEvent</label>
                <input type="text"
                       name="Typeofevent"
                       className="form-control"
                       placeholder={this.props.EventData.Typeofevent}
                       ref="Typeofevent"
                       onChange={this.props.onChange}
                       value={this.props.EventData.Typeofevent}/>
                <label htmlFor="Place">Place</label>
                <input type="text"
                       name="Place"
                       className="form-control"
                       placeholder={this.props.EventData.Place}
                       ref="Place"
                       onChange={this.props.onChange}
                       value={this.props.EventData.Place}/>
                <label htmlFor="Cost">Cost</label>
                <input type="text"
                       name="AverageCost"
                       className="form-control"
                       placeholder={this.props.EventData.AverageCost}
                       ref="Cost"
                       onChange={this.props.onChange}
                       value={this.props.EventData.AverageCost}/>
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.ConfirmOrder}/>
            </form>
        );
    }
});
module.exports=PriceConfirm;