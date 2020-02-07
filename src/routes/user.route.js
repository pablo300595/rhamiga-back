const express = require('express');
const routerUser = express.Router();
const {getAllUsers, getUserById, insertUser, deleteUser, 
    updateUserById, authUser} = require('./../controllers/user.controller');

routerUser.route('/')
    .get(getAllUsers)
    .post(insertUser);

routerUser.route('/:id')
    .delete(deleteUser)
    .get(getUserById)
    .put(updateUserById);

routerUser.route('/auth')
    .post(authUser)

module.exports = routerUser;