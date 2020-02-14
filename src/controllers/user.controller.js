const User = require('./../models/user.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

async function getAllUsers(req,res){ 
    const users = await User.aggregate([
        {
            $lookup: {
                from: 'candidates',
                localField: 'candidate',
                foreignField: '_id',
                as: 'user_candidate'
            }
        }
    ]);
    res.json(users);
}

async function getUserById(req,res){ 
    const searchedUser = await User.aggregate([
        {   
            $lookup: {
                from: 'candidates',
                localField: 'candidate',
                foreignField: '_id',
                as: 'user_candidate'
            }
        },
        {
            $match: {
                _id:ObjectId(req.params.id)
            }
        }
    ]);
    res.json(searchedUser);
}

async function getUserByUsername(req, res){ 
    const searchedUser = await User.find({username: req.params.id})
    res.json(searchedUser);
}

async function insertUser(req,res){ 
    const user = new User(req.body);
    return await user.save().then(() => {
        res.json({message: 'user inserted succesfully!'});
    });
}

async function deleteUser(req,res){ 
    return await User.deleteOne({_id: req.params.id}).then((err) => {
        res.json({message: 'User deleted succesfully!'});
    });
}

async function updateUserById(req,res){ 
    const user = {
        username: req.body.username,
        password: req.body.lastName,
        credential: req.body.credential,
        registrationDate: req.body.registrationDate,
        active: req.body.active,
        candidate: req.body.candidate,
        recruiter: req.body.recruiter,
        evaluator: req.body.evaluator,
    };
    return await User.updateOne({_id: req.params.id},{$set: user}, {new: true}).then(()=>{
        res.json({message: 'User updated succesfully!'});
    });
}

async function authUser(req, res){ 
    const userToAuth = await User.aggregate([
        {   
            $lookup: {
                from: 'candidates',
                localField: 'candidate',
                foreignField: '_id',
                as: 'user_candidate'
            }
        },
        {
            $match: {
                username: req.body.username,
                password: req.body.password
            }
        }
    ]);
    res.json(userToAuth);
}

module.exports = {
    getAllUsers, getUserById, getUserByUsername, insertUser, deleteUser, 
    updateUserById, authUser
}