var express = require('express');
var adminRouter = express.Router();



adminRouter.route('/')    
  .get(function(req,res){
        res.send('Hello admin here');
      //res.render('Events',{ title: 'Hello from DJJB' , Project:'DJPProject'});  

  });
  
adminRouter.route('/admin/:id')
  .get(function(req,res){
  	   var eventId= req.params.id;   
        res.send('hello admin no ' + eventId);
  

  });
module.exports = adminRouter;