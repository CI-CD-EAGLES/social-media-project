const express = require('express');

const app = express.Router();

const {
    getAllPosts,
    getPostByUsername,
    deletePostById,
    createPost,
    updatePost,
    getAllPostsWithUser
} = require('../controllers/PostController');

const {
    createUser,
    deleteUserByUsername,
    getAllUsers,
    getUserByUsername,
    updateUser,
    getAllUsersWithPosts
} = require('../controllers/UserController');

// Get all posts: WORKS
app.get('/posts', getAllPosts);

// Get posts by username: WORKS
app.get('/posts/:user_name', getPostByUsername);

// Delete post by id: WORKS
app.delete('/posts/:id', deletePostById);

// Create a post: WORKS
app.post('/posts', createPost);

// Update post by id: WORKS
app.put('/posts/:id', updatePost);

// Get all users: WORKS
app.get('/users', getAllUsers);

// Get single user: WORKS
app.get('/users/:user_name', getUserByUsername);

// Delete user by username: WORKS
app.delete('/users/:user_name', deleteUserByUsername);

// Create a user: WORKS
app.post('/users', createUser);

// Update user: WORKS
app.put('/users/:user_name', updateUser);

// Get all POST via USER
app.get('/users-posts', getAllPostsWithUser);
module.exports = app;