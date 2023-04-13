require('dotenv').config();
const express = require('express');

//Connect to separate file for configuration to Db 
const connectToFlightDB = require('./config/flightdb');
//Connect to flight Model
const Flight = require('./models/Flight')

const app = express();

//* ========= Configuration - telling app to use jsx for view engine
app.set('view engine', 'jsx');
// turn on the engine, require jsx-view-engine and call method
app.engine('jsx', require('jsx-view-engine').createEngine());


//*middleware take in req res and next property - setting a middleware to run in app - creating our own 
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
//parses the data from the request (available in req.body in POST method (accepting data from the form))
app.use(express.urlencoded({extended: false}))




//* ===== Routes 

app.get('/', (req, res) => {
    res.send('Mongoose Server is up')
})

//* Index Route
//display list of flights
app.get('/flights', (req,res) => {
    // res.render('Index', {flights: flights})
    //? find and return everything from mongoDB collection
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights: allFlights})
    })
})
 
//* Post Method
//accept data from the form
app.post('/flights', (req, res) => {
    console.log(req.body);
    //adding to mongoDB
    Flight.create(req.body, (error, createdFlight) => {
        // res.send(createdFlight)
        res.redirect('/flights')
})
})


//* New Route 
//return a form to create new flight

app.get('/flights/new', (req, res) => {
    res.render('New')
})




//* =====================

app.listen(3000, () => {
    console.log('Server is up');
    connectToFlightDB()
})