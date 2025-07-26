const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title:{
        type:String,
        required:[true,'Post title is required'],
        trim: true,
        maxlength: 100,
    },
    content:{
        type:String,
        required:[true,'Post content is required']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    tags:{
        type: [String],
        default: [] 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('post',BlogSchema)