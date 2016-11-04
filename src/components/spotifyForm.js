var React = require('react');


var spotifyForm =React.createClass({

    renSearch: function () {
        if (!this.props.tracks) {
            return null;
        }
        return (

            <div className="strack-template">
                <div className="sborder">
                    <div className="sart">
                        <img className="simg" src="https://i.scdn.co/image/f77f484d87a4b84e611af30011c381f9ccef0d0b"/>
                    </div>
                    <div className="spreview">

                        <a href="https://p.scdn.co/mp3-preview/3213a35ec32d4c747e794072a5ef7b464b4fcb69" target="_blank">preview track</a>

                    </div>
                    <div className="link">
                        <a href="https://open.spotify.com/track/2gFvRmQiWg9fN9i74Q0aiw"><img  src="img/listen.jpg" className="listen"/></a>
                    </div>
                        <span className="strack">Bruno Mars-24k magic</span>
                    <div className="snumbers"></div>
                </div>
            </div>


        );

    },

    render: function () {


        return (

            <div className="sbody">


                <div className="sintro1">
                    <img className="simg" src="img/spotfy.png"/>
                </div>
                <div className="sintro2">Get an artist's top ten tracks!!</div>
                <div className="scontainer">

                    <form className="sname">
                        <input type="text" onChange={this.props.Change} value={this.props.Artist.Name}
                               placeholder="artist"
                               name="Name" size="30"
                               ref="Typeofevent" id="search"/>
                        <input type="submit" value="Save"
                               className="ssubmit"
                               id="submit" onClick={this.props.onSave}/>
                    </form>


                <div id="results">

                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
                {this.renSearch()}
               </div>
                </div>
            </div>
        );

    },
});



module.exports=spotifyForm;







