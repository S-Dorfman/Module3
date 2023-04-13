//*======Flight Model
const mongoose = require('mongoose');

// Create the schema structure/blueprint - defining the properties 
const flightSchema = new mongoose.Schema({
    airline: {
       type: String,
       enum: ['American', 'Southwest', 'United']
    },
    flightnum: {
        type: Number, 
        //limit # 
       min: 1,
       max: 9999 
    },
    departs: {
        type: Date,
        required: true
        
            // function() {
            // const nextYear = new Date();

            // nextYear.setFullYear(nextYear.getFullYear() + 1);
            // return nextYear;
        // }
    }
});


//Mongoose model - for methods and functionality
const Flight = mongoose.model('Flight', flightSchema)

//export
module.exports = Flight;