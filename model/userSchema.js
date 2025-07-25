const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema  = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{timestamps:true})

module.exports = mongoose.model('user',userSchema)