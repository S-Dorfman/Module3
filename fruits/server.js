const express = require('express');

const app = express();
const PORT = 3000; 

//Data
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
})

app.get('/fruits', (req, res) => {
    res.send(fruits);
})

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});


app.listen(3000, () => {
    console.log(`Server running on Port: ${PORT}`);
})
