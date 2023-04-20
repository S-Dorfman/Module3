require('dotenv').config();
const express = require('express');

//connect to separate file for configuration to DB
const connectToDB = require('./config/db')

//Data 
const Pokemon = require('./models/Pokemon1')
const pokemon = require('./models/pokemon')

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


//*routes
//home
app.get('/', (req, res)=> {
    res.send('Welcome to the Pokemon App!')
})

//index route
app.get('/pokemon', (req,res) => {
    // res.send(pokemon)
    // res.render('Index', {pokemon: pokemon})
    //? return mongoDB collection
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})

//POST Method
app.post('/pokemon', (req, res) => {
    // console.log(req.body);

    //* add new mongoDB object
    Pokemon.create(req.body, (error, createdPokemon) => {
        // res.send(createdPokemon)
        res.redirect('/pokemon')
    })
})

//new Route
app.get('/pokemon/new', (req,res) => {
    res.render('New')
})

//:show route 
app.get('/pokemon/:id', (req,res) => {
    // res.send(req.params.id)
    // res.render('Show', {pokemon: pokemon[req.params.indexOfPokemonArray]})
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    })
})

//running app
app.listen(3000, () => {
    console.log(`Server is running on Port: ${PORT}`);
    connectToDB()
})