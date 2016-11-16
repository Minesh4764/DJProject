var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var AccessoriesModel = new Schema({
    Accesory : {type: String},
    Price:  {type:Number},
    noOfAccesory:{type:Number}

});



module.exports= mongoose.model('Accesories', AccessoriesModel);




