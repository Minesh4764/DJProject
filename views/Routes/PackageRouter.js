
var express = require('express');




var Package = function(Model) {
    var PriceRouter = express.Router();
    PriceRouter.route('/')
        .get(function (req, res) {

            // res.send("IM in proce");
            Model.find().populate('Equipment')
                .exec(function (err, docs) {
                if (err) {

                      res.send('there is no data ');
                }

                res.send(docs);

            });
        })
        .post(function (req, res) {

            console.log(req.body);
           var NeweModel = new Model();


            NeweModel.TypeofPackage=req.body.type,
                NeweModel.Description=req.body.description,
                NeweModel.Extras = req.body.extra,
                NeweModel.BasicCost=req.body.BasicCost,
                NeweModel.ForNoOFPeople=req.body.people,



            NeweModel.save();

          //  res.send("I in in post");

            res.send(NeweModel);
         /*  Model.create(dataobj, function (err, doc) {

                res.send(Model);
            })*/


        });
    return PriceRouter;

};
module.exports =Package;