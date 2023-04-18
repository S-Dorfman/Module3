require('dotenv').config();  //call and configure dotenv package 
const express = require('express');
//require mongoose to connect to database
const mongoose = require('mongoose');
// require method override
const methodOverride = require('method-override')

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


//*middleware take in req res and next property 
//setting a middleware to run in app - creating our own 
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
//parses the data from the request (available in req.body in POST method (accepting data from the form))
app.use(express.urlencoded({extended: false}))
//use methodOverride.  override with POST using _method to DELETE
app.use(methodOverride('_method'))
//* tell exppress app to use css styles from static public folder
app.use(express.static('public'))


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


//*Return the edit form
app.get('/fruits/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
       if(!error) {
        res.render('fruits/Edit', {fruit: foundFruit})
       } else {
        res.send({msg: error.message})
       }
    })
})

//* Handle the edit form data
app.put('/fruits/:id', (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true; 
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (error, updatedFruit) => {
        // res.send(updatedFruit)
        res.redirect(`/fruits/${req.params.id}`)
    })
})


//*Seed Route - add fruit data to index 
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});


/**
 * Show Route: (returns a single fruit)
 *? colon : less specific, goes after specific routes
 */
app.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitsArray]);
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitsArray]});
    Fruit.findById(req.params.id, (error, foundFruits) => {
        res.render('fruits/Show', {fruit: foundFruits})
    })
});

//! DELETE FRUIT
app.delete('/fruits/:id', (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
        //? can add method to save deleted data in a different database
        // res.send(deletedFruit)
        res.redirect('/fruits')
    })
})



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
