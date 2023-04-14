const express = require('express');


const app = express();
const PORT = 3000;

//Configuration
//telling app to use jsx for view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
//middleware take in req res and next property 
//setting a middleware to run in app - creating our own 
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
app.use(express.urlencoded({extended: false}))


// Routes
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

//new route
app.get('/new', (req, res) => {
    // res.send('NEW')
    res.render('New')
})

//create route

//index route

//show route

//delete route

//edit route

//update route




//Running app
app.listen(3000, () => {
    console.log(`App is running on PORT: ${PORT}`);
})