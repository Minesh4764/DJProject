var React = require('react');


var spotifyForm =React.createClass({

renSearch :function (Event) {
      if(!this.props.tracks) {
          return null;
      }
        return (
            <div>
                {Event.map(function(ignore,index) {
                 console.log(Event[index][10]);

                  return (
                     <div className="strack-template">
                         <div className="sborder">
                             <div className="sart">

                                 <img className="simg" src={Event[index][10]}/>
                             </div>
                             <div className="spreview">

                                 <a href={Event[index][10]} target="_blank">preview track</a>

                             </div>
                             <div className="link">
                                 <a href={Event[index][10]}><img src="img/listen.jpg" className="listen"/></a>
                             </div>
                             <span className="strack">{Event[index][10]}</span>
                             <div className="snumbers"></div>
                         </div>
                     </div>

                 );

             }.bind(this))}
          </div>);
        },


    render: function () {
console.log(this.props.ArtistData);

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


                    {this.renSearch(this.props.ArtistData,this)}

               </div>
                </div>
            </div>
        );

    },
});



module.exports=spotifyForm;







