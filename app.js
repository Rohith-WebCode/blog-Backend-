const express = require('express');
const connectDB = require('./database/db');
const app = express()
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

connectDB()
const port =process.env.port||5000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Routes
app.use('/api',blogRoutes)
app.use('/api',userRoutes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))