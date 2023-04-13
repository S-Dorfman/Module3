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
const pokemon = require('./models/pokemon')

//routes
//home
app.get('/', (req, res)=> {
    res.send('Welcome to the Pokemon App!')
})

//index route
app.get('/pokemon', (req,res) => {
    // res.send(pokemon)
    res.render('Index', {pokemon: pokemon})
})

//:show route 
app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
    // res.send(req.params.id)
    res.render('Show', {pokemon: pokemon[req.params.indexOfPokemonArray]})
})

//running app
app.listen(3000, () => {
    console.log(`Server is running on Port: ${PORT}`);
})