const express = require('express')
const routes = express.Router()
const { newPost,getPost,updatePost,deletePost } = require('../controllers/blogControllers')

routes.get('/posts',getPost)
routes.post('/posts',newPost)
routes.put('/posts/:id',updatePost)
routes.delete('/posts/:id',deletePost)

module.exports = routes;