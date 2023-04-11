require('dotenv').config();  //call and configure dotenv package 
const express = require('express');
//require mongoose to connect to database
const mongoose = require('mongoose');

//Data
const fruits = require('./models/fruits'); 
const Fruit = require('./models/Fruit');

const app = express();
const PORT = 3000; 

//* ========= Configuration
//telling app to use jsx for view engine
app.set('view engine', 'jsx');
// turn on the engine, require jsx-view-engine and call method
app.engine('jsx', require('jsx-view-engine').createEngine());

//?middleware take in req res and next property 
//setting a middleware to run in app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
//parses the data from the request 
app.use(express.urlencoded({extended: false}))



//* ======= Routes

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
})

/**
 * Index: Route: (return a list of fruits)
 */

app.get('/fruits', (req, res) => {
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits})
    //? find and return everything from mongoDB collection
    Fruit.find({}, (error, allFruits) => {
        res.render('fruits/Index', {fruits: allFruits})
    })
})

/**
 * POST method (accept data from the form)
 */

app.post('/fruits', (req, res) => {
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // fruits.push(req.body)

    //* adding new mongoDB Fruit object
    
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit);
        res.redirect('/fruits')
    })
})


/**
 * New Route: (return a form to create a new fruit)
 */
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
    
})

/**
 * Show Route: (returns a single fruit)
 ** colon : less specific, goes after specific routes
 */
app.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitsArray]);
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitsArray]});
    Fruit.findById(req.params.id, (error, foundFruits) => {
        res.render('fruits/Show', {fruit: foundFruits})
    })
});

/**
 * Route for typos - redirect to '/fruits' page if user enters wrong route - res.redirect('/fruits')
 * or direct to 404 page - res.render('404')
 */
app.get('*', (req, res) => {
    // res.redirect('/fruits')
    res.render('404')

})


//running on local host 
app.listen(3000, () => {
    console.log(`Server running on Port: ${PORT}`);
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
