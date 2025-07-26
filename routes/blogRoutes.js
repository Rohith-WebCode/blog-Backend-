const express = require('express')
const routes = express.Router()
const { newPost,getPost,updatePost,deletePost,myPosts } = require('../controllers/blogControllers')
const protect = require('../Middleware/protectRoutes')

routes.get('/posts',protect,getPost)
routes.post('/posts',protect,newPost)
routes.put('/posts/:id',protect,updatePost)
routes.delete('/posts/:id',protect,deletePost)
routes.get('/mypost',protect,myPosts)

module.exports = routes;