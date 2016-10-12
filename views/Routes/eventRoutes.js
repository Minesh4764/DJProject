var express = require('express');
var djEventRouter = express.Router();


var express = require('express');

  //using router
var routes = function(Event) {
var eventRouter = express.Router(); 
eventRouter.route('/')   
    .post(function(req,res){
           var event = new Event(req.body); //creating an instance of event and passing data using req.body
           console.log(event);
           event.save();                   //saving it to database
           res.status(200).send(event);

    })
                        
                                    
    .get(function(req,res){
         var query ={};
         console.log('I am on get method');
         if(req.query.Typeofevent) {                 
              query.Typeofevent =req.query.Typeofevent;

         }

        Event.find(query,function(err,events){                      //query database
            if(err)
                 //console.log(err);
                res.status(500).send(err);
            else
            //  res.json({ title: 'Hello from DJJB' , Project:'DJPProject'});
                res.json(events);
        });
    });
 
eventRouter.use('/:eventId',function(req,res,next){       //using middlewere to find the events for patch getbyid and put command
  Event.findById(req.params.eventId,function(err,event){  

             console.log(event);                              //query database
            if(err) 
                 //console.log(err);
                res.status(500).send(err);
            else if (event){

                   req.event =event;   //assigning to req.event to be usd in get get put patch and delete
                 next();
               }
               else {
                      res.status(404).send('No event Found');
                   }

        });

    });


eventRouter.route('/:eventId')
  .get(function(req,res){
     
      res.json(req.event);

    })
   .put(function(req,res){
     //


            //else 
                req.event.Typeofevent =req.body.Typeofevent;
                req.event.EventDate =req.body.EventDate;
                req.event.AverageCost =req.body.AverageCost;
                req.event.DoneBy  = req.body.DoneBy;
                event.save();
                res.json(event);
                
   

    })
      .patch(function(req,res){
      
       if (req.body._id) {
           delete req.body_id; // dont allow to change the id

       }

        for (var key in req.body)
         { 
              req.event[key] =req.body[key];

         }      
        req.event.save(function(err) {
                if(err)
                     res.status(201).send(err);
      
                 else 
                 	   res.json(req.event);
       });

     })
      .delete(function(req,res) {
         req.event.remove(function(err){
          if (err) {

           res.send("error Deleting " ); }

         });
           res.status(200).send("removed") ; 

      });


return eventRouter;
};

module.exports=routes;






