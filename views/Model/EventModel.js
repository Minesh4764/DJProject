var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventModel = new Schema({  //defining a schema and assigning a model prototype
    Typeofevent: {type: String},
    EventDate: {type: Date,default:Date.now},
    AverageCost: {type: Number,default:400},
    Place: {type: String}
});

module.exports= mongoose.model('Event', EventModel);


