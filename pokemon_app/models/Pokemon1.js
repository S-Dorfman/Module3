//* mongoDB Pokemon model

const mongoose = require('mongoose');

// Mongoose schema - structure/blueprint - defining the properties on the pokemon
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img:  { type: String, required: true }
})

//Mongoose model - for methods and functionality
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

//export
module.exports = Pokemon; 