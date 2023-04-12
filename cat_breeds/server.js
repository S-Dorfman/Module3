const express = require('express');

const app = express();
const PORT = 3000; 


// ========= configuration

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
const cats = require('./models/catbreeds')

//====== Routes
//home
app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>")
})

//index route
app.get('/cats', (req, res) => {
    // res.send(cats)
    res.render('Index', {cats: cats})
})

//show route
app.get('/cats/:indexOfCatsArray', (req, res) => {
    console.log(req.params);
    // res.send(cats);
    res.render('Show', {cat: cats[req.params.indexOfCatsArray]});
})

//404 route
app.get('*', (req, res) => {
    res.render('404')
})


app.listen(3000, () => {
    console.log(`Server is running on Port: ${PORT}`);
})