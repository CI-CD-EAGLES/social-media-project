const express = require('express');

const app = express.Router();

const {
    getAllPosts,
    getPostByUsername,
    deletePostById,
    createPost,
    updatePost
} = require('../controllers/index');

// Get all posts
app.get('/posts', getAllPosts);

// Get single post
app.get('/posts/:user_name', getPostByUsername);

// Delete post by id
app.delete('/posts/:id', deletePostById);

// Create a post
app.post('/posts', createPost);

// Update post
app.put('/posts', updatePost);

module.exports = app;