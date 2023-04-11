//* mongoDB Fruit model

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties on the fruit
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
})

//Mongoose model - for methods and functionality
const Fruit = mongoose.model('Fruit', fruitSchema);

//export
module.exports = Fruit; 