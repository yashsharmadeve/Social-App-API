const mongoose = require('mongoose');

const PostScheme = new mongoose.Schema({
    userId: {
        type:String,
        required: true
    },
    desc:{
        type:String,
        max:100
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default: []
    },
},
{timestamps: true})

module.exports = mongoose.model("Post", PostScheme);