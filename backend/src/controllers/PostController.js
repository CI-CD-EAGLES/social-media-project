const Posts = require('../models/Models').Posts;
const debug = require('debug')('app:controllers');
const {validationResult} = require('express-validator');
const { Users } = require('../models/Models');

exports.getAllPosts = async (req, res) => {
    try {
        // GET ALL POSTS
        const posts = await Posts.findAll();

        if(!posts){
            res.status(400).json({
                success: false,
                message: 'no posts found',
            });
        } else {
            res.status(200).json({
                posts,
                success: true,
                message: "All posts returned",
            })
        }
    } catch(err){
        debug(err);
        res.status(400).json({
            success: false,
            message: `Error: ${err.message}`, 
        })
    }
}

exports.getAllPostsWithUser = async (req, res) => {
    try {
        // GET ALL POSTS
        const posts = await Posts.findAll({
            include: Users
        });

        if(!posts){
            res.status(400).json({
                success: false,
                message: 'no posts found',
            });
        } else {
            res.status(200).json({
                posts,
                success: true,
                message: "All posts returned",
            })
        }
    } catch(err){
        debug(err);
        res.status(400).json({
            success: false,
            message: `Error: ${err.message}`, 
        })
    }
}

exports.getPostByUsername = async (req, res) => {
    const postUserName = req.params.user_name;

    try {
        const post = await Posts.findOne({
            where: { user_name: postUserName }
        });

        // CHECK IF POST ID IS VALID OR NOT
        if(!post) {
            res.status(400).json({
                success: false,
                message: `Post not found - Check post id!`
            })
        } else {
            res.status(200).json({
                post,
                success: true,
                message: `Post found succesfully!`
            })
        }
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `Post not found - ERROR: ${error.message}`
        })
    }
};

exports.deletePostById = async (req, res) => {
    const postId = req.params.id;

    try {
        const postToDelete = await Posts.findByPk(postId);
        const deletedPost = await postToDelete.destroy();

        // DELETE POST
        res.status(200).json({
            deletedPost,
            success: true,
            message: `Post deleted succesfully!`
        });
    } catch (error) {
        debug('ERROR: ', error);
        res.status(400).json({
            success: false,
            message: `Unable to delete post - ERROR: ${error.message}`
        });
    }
};

/**
 * @desc Create a single post
 * @route POST /api/post/create
 * @access Private
 */
exports.createPost = async (req, res) => {
    const errors = validationResult(req);

    // CHECK FOR EMPTY ERROR ARRAY
    if(!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            error: errors.array()
        })
    } else {
        try {
            // GRAB BODY OF REQ
            const newPost = req.body;
            // USE CREATE FUNCTION IN SEQUELIZE TO CREATE POST
            const createdPost = await Posts.create(newPost);
            res.status(200).json({
                createdPost,
                success: true,
                message: `Post created succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `Post not created - ERROR: ${error.message}`
            });
        }
    }  
};


exports.updatePost = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            error: errors.array()
        });
    } else {
        const postId = req.params.id;
        const updates = req.body;

        try {
            // FIND POST BY ID
            const postToUpdate = await Posts.findByPk(postId);
            // UPDATE POST WITH THE UPDATESS ENTERED BY USER
            const updatedPost = await postToUpdate.update(updates);

            res.status(200).json({
                updatedPost,
                success: true,
                message: `Post updated succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `Unable to update post - ERROR: ${error.message}`
            });
        }    
    }
};