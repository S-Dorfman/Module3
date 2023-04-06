const express = require('express')

const app = express();
const PORT = 3000;


//data


//routes

app.get('/', (req, res) => {
    res.send("<h1>99 Bottles of beer on the wall</h1><a href='/98'>take one down pass it around</a>");
})

app.get("/:number_of_bottles", (req, res) => {
    console.log(req.params);
    const { number_of_bottles } = req.params;

    if(number_of_bottles === '0') {
        res.send("<a href='/98'>No more beer, start over!</a>")
    } 
    else if(number_of_bottles < 0 || number_of_bottles > 99) {
        res.send("<a href='/98'>Invalid entry</a>")
    }

    res.send(`<h1>Number of bottles left: ${number_of_bottles}</h1><a href='/${number_of_bottles - 1}'>take one down, pass it around</a>`)
})

//server

app.listen(3000, () => {
    console.log(`Server is running on Port: ${PORT}`);
})