
var express = require('express');
var PriceRouter = express.Router();

var Package = function(Model) {

    PriceRouter.route('/')
        .get(function (req, res) {

            // res.send("IM in proce");
            Model.find().populate('Equipment').exec(function (err, docs) {
                if (err) {

                    //    res.send('there is no data ');
                }

                res.send(docs);

            })
        })
        .post(function (req, res) {

            var dataobj = {
                TypeofPackage: req.body.type,
                Equipment: req.body.equipment,
                BasicCost: req.body.cost,
                ForNoOFPeople: req.body.people


            };
            Model.create(dataobj, function (err, doc) {

                res.send(doc);
            })


        });
    return PriceRouter;

};
module.exports =Package;