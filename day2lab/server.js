// import or load the express module
const express = require('express');

// create an instance of the express app
const app = express();
// define port 
const PORT = 3000;


//Routes
//home route
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

//greeting route
app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.name}`)
})

//tip route
app.get('/tip/:total/:tipPercentage', (req,res) => {
    console.log(req.params);
    const {total, tipPercentage} = req.params;

    res.send(`Your tip is: $ ${total * (tipPercentage / 100)}`)
});

//Data

const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


//magic 8 ball route 
app.get('/magic/:phrase', (req, res) => {
    console.log(req.params);

    const magicreply = Math.floor(Math.random() * magic.length-1);

    // res.send(magic[magicreply])

    //html response
    res.send(`<h2>${magic[magicreply]}</h2>`)
    
})



//server
app.listen(3000, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});