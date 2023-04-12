const mongoose = require('mongoose');

// Create the schema
const tweetSchema = new mongoose.Schema({
    title: String,
    body: {
        type: String,
        //limit # of characters
        min: 1,
        max: 255
    },
    author: String,
    category: {
        type: String,
        enum: ['Programming', 'Gaming', 'Arts']
    },
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)

// Create the model 

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet; 