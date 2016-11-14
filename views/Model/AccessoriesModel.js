var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccessoriesModel = new Schema({  //defining a schema and assigning a model prototype
    Accesory: {type: String},
    Price: {type: Number}

});

module.exports= mongoose.model('Accesories', AccessoriesModel);




