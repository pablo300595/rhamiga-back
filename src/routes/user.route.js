const express = require('express');
const routerUser = express.Router();
const {getAllUsers, getUserById, insertUser, deleteUser, 
    updateUserById} = require('./../controllers/user.controller');

routerUser.route('/')
    .get(getAllUsers)
    .post(insertUser);

routerUser.route('/:id')
    .delete(deleteUser)
    .get(getUserById)
    .put(updateUserById);

module.exports = routerUser;