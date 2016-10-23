var React = require('react');

var spotifyForm =React.createClass({
    render: function () {

        return (

            <form>
                <h1>Edits Event</h1>


                <label htmlFor="Typeofevent">TypeOfEvent</label>
                <input type="text"
                       name="Name"
                       className="form-control"
                       placeholder="enter"
                       ref="Typeofevent"
                       onChange={this.props.Change}
                       value={this.props.Artist.Name}
                />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});
module.exports=spotifyForm;