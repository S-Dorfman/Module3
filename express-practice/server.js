// import or load the express module
const express = require('express');

// create an instance of the express app
const app = express();

//* ====== Define our routes

//* ===== Routes

// root or main route
app.get('/', function(req, res) {
    //use the response object to send back some data 
    res.send("<h1>Welcome to express!</h1>")
})

// '/home' route
app.get('/home', function(req, res){
    res.send("<h1>Home Page</h1>")
})

// cars route
app.get('/cars', function(req,res){
    res.send("New car created")
})

// app.post = receive data
app.post('/cars', function(req, res){
    res.send("List of cars")
})


//start to listen for request 
app.listen(4000, function() {
    console.log('server is running....');
})
