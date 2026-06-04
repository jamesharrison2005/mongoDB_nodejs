const  mongoose = require('mongoose');

const catSchema = new mongoose.catSchema({
    name: {type:String, required:true},
    breed: {type:String, required:true},
    weight: {type:Number, required:true}
});

module.exports = mongoose.model('Cat', CatSchema);