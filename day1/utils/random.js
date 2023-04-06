// const random = require('./utilities/random');
// for (let i = 0; i < 10; i++) {
//     console.log( random(100, 200) );
// }

//
module.exports = function(min, max ) {
    return Math.floor(Math.random() * (max - min) + 1 ) + min
}