require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

//connect to separate file for configuration to DB
const connectToDB = require('./config/db');
//connect model 
const Logs = require('./models/Logs')


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
app.get('/logs/new', (req, res) => {
    // res.send('NEW')
    res.render('New')
})

//create route
app.post('/logs', (req, res) => {
    
    // console.log(req.body);
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    // res.send(req.body)

    //add new mongoDB Log Object
    Logs.create(req.body, (error, createdLog) => {
        // res.send(createdLog);
        res.redirect('/logs')
    })

    // res.redirect()
})


//index route
app.get('/logs', (req,res) => {
    Logs.find({},(error, allLogs) => {
        res.render('Index', {logs: allLogs})
    })
})

//show route

//delete route

//edit route

//update route




//Running app
app.listen(3000, () => {
    console.log(`App is running on PORT: ${PORT}`);
    connectToDB()
})