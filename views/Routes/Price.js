
var express = require('express');

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var priceRouter = express.Router();

priceRouter.route('/')
    .get(function (req,res) {

// Connection URL
        var url = 'mongodb://localhost:27017/DJJB';
// Use connect method to connect to the server
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
          //  console.log("Connected correctly to server");
            var Collection1 = db.collection('Accesory');
            var collection = db.collection('Package');

            // Find some documents
            collection.find({}).toArray(function (err1, docs) {

                assert.equal(err1, null);
                Collection1.find({}).toArray(function(err,docs1){
                       assert.equal(err,null);

                        console.log("Found the following records");
                        console.log(docs);
                  //docs.concat(docs1);
                res.send(docs)
                    });
            });


        });

    });




module.exports = priceRouter;