const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected',()=>console.log("Database Connected")
    )
        await mongoose.connect(url)
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports = connectDB