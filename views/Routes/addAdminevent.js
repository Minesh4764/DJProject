var express  = require('express');
var addEventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;




Events =
         [
           {
           Typeofevent :'Sweet 16',
            AverageCost :800,
            Place :'Hilton'
           },
             {
           Typeofevent :'50th Birtheday',
            AverageCost :900,
            Place :'Hilton'
           },
          {
           Typeofevent :'Recpetion',
            AverageCost :2500,
            Place :'Hampton Inn'
           },
          {
           Typeofevent :'wedding and Recpetion',
            AverageCost :4000,
            Place :'Hilton'
           }
      

         ];
var router = function(event) {

    addEventRouter.route('/')
        .get(function(req,res) {

        	//res.send('Inserting Events');
              url ='mongodb://localhost:27017/DJJB';
             mongodb.connect(url,function(err,db){
             	  if(err) {
                    console.log('err connecting');

             	  }
             var collection = db.collection('Events');
             collection.insertMany(Events,function(err,results){
             	    if (err) {

             	    	 console.log('erro insertig data');
             	    }
                    res.send(results);
                   db.close();


             });
  

             });

         //    get iit by id ad patch it or delete
    
 

              // res.send('inserting Events');
   

        });
        return addEventRouter



}
module.exports = router;