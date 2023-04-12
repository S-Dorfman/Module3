// seperate file for configuration to DB

const mongoose = require('mongoose');

// Global Configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function() {
    // Connection to MongoDB
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    
    // Automatically close after 5 seconds 
    // setTimeout(() => {
    //     db.close();
    //   }, 5000);

    //listen for events - gives flexibilty - handle each event seperately 
    db.on('error', (error) => console.error(error))
    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('close', () => console.log('Mongo Disconnected'))
}