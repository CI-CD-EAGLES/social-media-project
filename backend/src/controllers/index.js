const Posts = require('../models/Users');
const debug = require('debug')('app:controllers');
const {validationResults} = require('express-validator');


exports.getAllPost = async (req, res) => {
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