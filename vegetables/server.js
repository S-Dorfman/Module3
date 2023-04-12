
require('dotenv').config();  //call and configure dotenv packageconst express = require('express');
//require mongoose to connect to database
const express = require('express');
const mongoose = require('mongoose');

//Data
const Veggie = require('./models/Veggie');

const app = express();
const PORT = 3000;

//* ========= Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
//*middleware take in req res and next property 
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
app.use(express.urlencoded({extended: false}))


//*Routes
//home 
app.get('/', (req, res) => {
    res.send("<h1>Veggies Home Page</h2>")
})

//index route 
//creating route '/veggies' to render 'Index' template 
app.get('/veggies', (req, res) => {
    // res.send("<h2>index page</h2>");
    res.render('Index')
    //? find and return everything from mongoDB collection
    // Veggie.find({}, (error, allVeggies) => {
    //     res.render('Index', {veggies: allVeggies})
    // })
})

//Post method (accept data from the form)
app.post('/veggies', (req, res) => {
    console.log(req.body);
    
    //add new mongoDB veggie object
    Veggie.create(req.body, (error, createdVeggie) => {
        res.send(createdVeggie)
    })
})



//new route
app.get('/veggies/new', (req, res) => {
    res.render('New')
})


//run app
app.listen(3000, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    //optional - to get rid of strictQuery warning
    mongoose.set('strictQuery', true)
    // connect to mongoDB
    mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    //console.log once when connected 
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})
