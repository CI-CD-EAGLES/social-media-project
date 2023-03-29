const Users = require("../models/Users");
const debug = require('debug')('app:controllers');
const {validationResult} = require('express-validator');

exports.getAllUsers = async (req, res) => {
    try {
        // GET ALL POSTS
        const users = await Users.findAll();

        if(!users){
            res.status(400).json({
                success: false,
                message: 'no users found',
            });
        } else {
            res.status(200).json({
                users,
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

exports.getUserByUsername = async (req, res) => {
    const userUserName = req.params.user_name;

    try {
        const user = await Users.findOne({
            where: { user_name: userUserName }
        });

        // CHECK IF POST ID IS VALID OR NOT
        if(!user) {
            res.status(400).json({
                success: false,
                message: `User not found - Check spelling!`
            })
        } else {
            res.status(200).json({
                user,
                success: true,
                message: `User found succesfully!`
            })
        }
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `User not found - ERROR: ${error.message}`
        })
    }
};

exports.deleteUserByUsername = async (req, res) => {
    const user = req.params.user_name;

    try {
        const userToDelete = await Users.findOne({
            where: { user_name: user }
    });
        const deletedUser = await userToDelete.destroy();

        // DELETE POST
        res.status(200).json({
            deletedUser,
            success: true,
            message: `User deleted succesfully!`
        });
    } catch (error) {
        debug('ERROR: ', error);
        res.status(400).json({
            success: false,
            message: `Unable to delete user - ERROR: ${error.message}`
        });
    }
};

/**
 * @desc Create a single post
 * @route POST /api/post/create
 * @access Private
 */
exports.createUser = async (req, res) => {
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
            const newUser = req.body;
            // USE CREATE FUNCTION IN SEQUELIZE TO CREATE USER
            const createdUser = await Users.create(newUser);
            res.status(200).json({
                createdUser,
                success: true,
                message: `User created succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `User not created - ERROR: ${error.message}`
            });
        }
    }  
};


exports.updateUser = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            error: errors.array()
        });
    } else {
        const user = req.params.user_name;
        const updates = req.body;

        try {
            // FIND POST BY ID
            const userToUpdate = await Users.findOne({
                where: { user_name: user}
            });
            // UPDATE POST WITH THE UPDATESS ENTERED BY USER
            const updatedUser = await userToUpdate.update(updates);

            res.status(200).json({
                updatedUser,
                success: true,
                message: `User updated succesfully!`
            });
        } catch (error) {
            debug(error);
            res.status(400).json({
                success: false,
                message: `Unable to update User - ERROR: ${error.message}`
            });
        }    
    }
};