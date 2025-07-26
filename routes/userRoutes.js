const express = require('express')
const routes = express.Router()
const {registerUser,loginUser} = require('../controllers/userController')

routes.post('/login',loginUser )
routes.post('/signup',registerUser )

module.exports = routes