const express = require('express');

const app = express();
const PORT = 3000; 

// ========= Configuration
//telling app to use jsx for view engine
app.set('view engine', 'jsx');
// turn on the engine, require jsx-view-engine and call method
app.engine('jsx', require('jsx-view-engine').createEngine());

//middleware take in req res and next property 
//setting a middleware to run in app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
//parses the data from the request 
app.use(express.urlencoded({extended: false}))


//Data
const fruits = require('./models/fruits'); 



app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
})

/**
 * Index: Route: (return a list of fruits)
 */

app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', {fruits: fruits})
})

/**
 * POST method (accept data from the form)
 */

app.post('/fruits', (req, res) => {
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if (req.body.readyToEat === 'on') {
        req.body,readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})


/**
 * New Route: (return a form to create a new fruit)
 */
app.get('/fruits/new', (req, res) => {
    res.render('New')
    
})

/**
 * Show Route: (returns a single fruit)
 */
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray]});
});

//redirect if user enters wrong route or have 404 page
app.get('*', (req, res) => {
    // res.redirect('/fruits')
    res.render('404')

})


app.listen(3000, () => {
    console.log(`Server running on Port: ${PORT}`);
})
