var React = require('react');

var PortFolio = React.createClass({
  render : function() {

   return ( 

<div id="portfolio" className="color white">
		
	
		<div className="container">

	
			<div className="wrapper span12">
	
					
			<div id="page-title">

				<div id="page-title-inner">

					<h2><span>Portfolio</span></h2>

				</div>	

			</div>

			<div className="slider">
				<div id="flex1" className="flexslider">
					<ul className="slides">

						<li><div className="picture"> <img src="img/slider/slider1.jpg" alt="" /></div></li>

						<li><div className="picture"><img src="img/slider/slider2.jpg" alt="" /></div></li>

						<li><div className="picture"><img src="img/slider/slider3.jpg" alt="" /></div></li>

					</ul>
				</div>
			</div>
	

			<div id="filters">
				<ul className="option-set" data-option-key="filter">
					<li><a href="#filter" className="selected" data-option-value="*">All</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".admin">Admin</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".dashboard">Dashboard</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".website">Website</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".html5">HTML5</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".css3">CSS3</a></li>
					<li>/</li>
					<li><a href="#filter" data-option-value=".responsive">Responsive</a></li>
				</ul>
			</div>

		
			<div id="portfolio-wrapper" className="row-fluid">
								
				<div className="span4 portfolio-item website html5 css3 responsive">
					
					<div className="picture"><a href="http://smart.bootstrapmaster.com" title="Smart Responsive Template"><img src="/img/portfolio/smart.png" alt=""/><div className="image-overlay-link"></div></a>
					
						<div className="item-description alt">
							<h5><a href="http://smart.bootstrapmaster.com">Smart Responsive Bootstrap Template</a></h5>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>	
				</div>

				<div className="span4 portfolio-item website html5 css3 responsive">
					<div className="picture">
						<a href="http://acme.bootstrapmaster.com" title="Title"><img src="img/portfolio/great.png" alt=""/><div className="image-overlay-link"></div></a>
							<div className="item-description alt">
								<h5><a href="http://acme.bootstrapmaster.com">Great Responsive Bootstrap Template</a></h5>
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							</p>
						</div>
					</div>
				</div>

				<div className="span4 portfolio-item website html5 css3 responsive">
					<div className="picture"><a href="http://magnus.bootstrapmaster.com" title="Title"><img src="img/portfolio/magnus.png" alt=""/><div className="image-overlay-link"></div></a>
						<div className="item-description alt">
							<h5><a href="http://magnus.bootstrapmaster.com">Magnus Responsive Bootstrap Template</a></h5>
							<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							</p>
						</div>	
					</div>
				</div>

				<div className="span4 portfolio-item admin dashboard html5 css3 responsive">
					<div className="picture"><a href="http://optimus.bootstrapmaster.com" title="Title"><img src="img/portfolio/optimus.png" alt=""/><div className="image-overlay-link"></div></a>
						<div className="item-description alt">
							<h5><a href="http://optimus.bootstrapmaster.com">Optimus Dashboard Bootstrap Template</a></h5>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							</p>
						</div>
					</div>
				</div>

				<div className="span4 portfolio-item admin dashboard html5 css3 responsive">
					<div className="picture"><a href="http://perfectum.bootstrapmaster.com" title="Title"><img src="img/portfolio/perfectum.png" alt=""/><div className="image-overlay-link"></div></a>
						<div className="item-description alt">
							<h5><a href="http://perfectum.bootstrapmaster.com">Perfectum Dashboard Bootstrap Template</a></h5>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							</p>
						</div>
					</div>
				</div>

				<div className="span4 portfolio-item website html5 css3 responsive">
					<div className="picture"><a href="http://redbox.bootstrapmaster.com"><img src="img/portfolio/redbox.png" alt=""/><div className="image-overlay-link"></div></a>
						<div className="item-description alt">
							<h5><a href="http://redbox.bootstrapmaster.com">Red Box Responsive Bootstrap Template</a></h5>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							</p>
						</div>
					</div>
				</div>

			</div>
		
			</div>
		
		
		</div>
	
		
	</div>




   	);


  }	



}) ;


module.exports = PortFolio;
