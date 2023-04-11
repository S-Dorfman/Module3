//* mongoDB Veggie model

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties on the fruit
const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
})

//Mongoose model - for methods and functionality
const Veggie = mongoose.model('Veggie', veggieSchema);

//export
module.exports = Veggie; 