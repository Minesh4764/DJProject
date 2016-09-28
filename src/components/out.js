var React = require('react');

var Contact = React.createClass({
  render : function() {

   return ( 
  <div> 	

 <div id="mapBg"></div>
	<div id="contact" className="color blue transparent">
		
	
		<div className="container">

	
			<div className="wrapper span12">

				
	
			
			<div id="page-title">

				<div id="page-title-inner">

						<h2><span>Contact</span></h2>

				</div>	

			</div>
			
			
			
			<div className="row-fluid">		
				
				<div className="span12">
					
			
					<b>creativeLabs</b> •
					25349 Damascus Park Terrace
					Damascus, MD 20872, USA •
					Phone: (240) 644-8412 •
					Email: MineshPatel2002@Gmail.com •
					Web: DJJBEntertainment.Com	
					
				
				</div>	
			
			</div>

			
			<hr className="clean">
			

			<div className="row-fluid">		
			
			
				<div className="span6">
			
					<div id="contact-form">

						<form method="post" action="">
							
							<fieldset>
								
								<input tabindex="4" id="name" name="name" type="text" value="" className="span12" placeholder="Name: ..." ></input>
								<input tabindex="2" id="email" name="email" type="text" value="" className="span12" placeholder="Email: ..."></input>
								<input tabindex="3" id="www" name="www" type="text" value="" className="span12" placeholder="WWW: ..."></input>
								<textarea tabindex="3" className="input-xlarge span12" id="message" name="body" rows="7" placeholder="Message: ..."></textarea>

								<div className="actions">
									<button tabindex="3" type="submit" className="btn btn-succes btn-large">Send message</button>
								</div>
								
							</fieldset>

						</form>

					</div>
		
					

				</div>
			
				
				<div className="span6">
					
					
					<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
					<div id="googlemaps">
						<div id="map" className="google-map google-map-full"></div>
					</div>
					<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
					<script src="js/jquery.gmap.min.js"></script>
							
				
				</div>	
			
			</div>


			</hr></div>
		
		
		</div>
		
		
	</div>

</div>

   	);


  }	



}) ;


module.exports = Contact;
