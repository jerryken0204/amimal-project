const mongoose = require('mongoose');

var Schema = mongoose.Schema;
//connect to mongo db, db name is myproject
mongoose.connect('mongodb://localhost/myproject',{useNewUrlParser: true});

//create schema
var animalSchema = new Schema ({
    animalname:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required:true
    }
})
//export collection
module.exports = mongoose.model('Aimal',animalSchema);
  

