//import express
const express = require('express');
const fs = require('fs');

// create express aop instance
const app = express();

// TODO: define our template engine
app.engine('madeline', (filePath, options, callback) => {
    //reading template file
    fs.readFile(filePath, (err, content) => {
        //if there is an error return and pass error to callback of the engine
        if (err) return callback(err);
        //if no errors parse the template file
        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        // return the parsed data
        return callback (null, rendered)
    })
    
})

//? Config ===========
// setting the views folder in our app
app.set('views', './views'); 
// tells our app to use the 'madeline' engine defined on top 
app.set('view engine', 'madeline'); 


// TODO: tell our express app to use our new template engine

// todo: create routes
app.get('/', (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.render('template', {title: 'Hello Express', message: 'My first template engine', content: 'Testing my template engine >XO' })
})

app.get('/about-me', (req, res) => {
    res.render('template', {title: 'About me', message: 'Hi, my name is Shosh', content: 'Check out my API!'})
})

app.get('/cat-news', (req,res) => {
    res.render('template', {title: 'Cat News', message: 'Latest Cat News', content: 'Cats go Skiing in Vermont'})
})





//
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
