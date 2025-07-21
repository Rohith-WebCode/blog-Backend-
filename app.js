const express = require('express');
const connectDB = require('./database/db');
const app = express()
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();

connectDB()
const port =process.env.port||5000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Routes
app.use('/',blogRoutes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))