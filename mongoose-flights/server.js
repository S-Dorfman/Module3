require('dotenv').config();
const express = require('express');

//Connect to separate file for configuration to Db 
const connectToFlightDB = require('./config/flightdb');
//Connect to flight Model
const Flight = require('./models/Flight')

const app = express();


//* ===== Routes 

app.get('/', (req, res) => {
    res.send('Mongoose Server is up')
})





//* =====================

app.listen(3000, () => {
    console.log('Server is up');
    connectToFlightDB()
})