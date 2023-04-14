const mongoose = require('mongoose');

//Create the schema
const logsSchema = new mongoose.Schema({
    title: String,
    entry: {
        type: String
    },
    shipIsBroken: {
        type: Boolean,
        default: true
    }
},
{timestamps: true}
)


//Create the model
const Logs = mongoose.model('Logs', logsSchema)

//export
module.exports = Logs; 