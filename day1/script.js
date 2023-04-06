console.log('running script...');

//* import or require a module  
const fs = require('fs');
const request = require('request'); 

// =============== Request Package ============

request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    console.log(body);
})


// =============Our own Module===============

// import or require our own module
const daysOfWeek = require('./days-of-week');

// using the daysOfWeek module
//!

// console.log(typeof fs);

//Write a new file
fs.writeFile('./hello.txt', 'Hello world Nodejs', function(e) {
    if (e){
        // console.log(e);
        //creates an explicit error to stop our program and let dev know (throw is like return )
        throw Error(e.message)
    }
    console.log('Done Writing file!');
})


fs.appendFile('./hello.txt', 'More data hello from node', function() {
    console.log('Done');
})

