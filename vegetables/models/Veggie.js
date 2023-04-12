//* mongoDB Veggie model

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties
const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
})

//mongoose model - for methods and functionality
const Veggie = mongoose.model('Veggie', veggieSchema);

//export
module.exports = Veggie; 