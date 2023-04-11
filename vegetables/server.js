
require('dotenv').config();  //call and configure dotenv packageconst express = require('express');
//require mongoose to connect to database
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

//index
app.get('/veggies', (req, res) => {
    //? find and return everything from mongoDB collection
    Fruit.find({}, (error, allVeggies) => {
        res.render('veggies/Index', {veggies: allVeggies})
    })
})


//run app
app.listen(3000, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
