const Session = require('./../models/session.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

async function insertSession(req, res){
    const session = new Session(req.body);
    return await session.save().then((r)=>{
        res.json({message: 'Session inserted succesfully!'});
    });
}

async function deleteSession(req, res){ 
    return await Session.deleteOne({_id:req.params.id}).then((r)=>{
        res.json({message: 'Session deleted succesfully!'});
    });
}

async function updateSession(req, res){ 
    const session = {
        user: req.body.user,
        sessionStart: req.body.sessionStart,
        active: req.body.active
    }
    return await Session.updateOne({_id: req.params.id}, {$set: user}, {new: true}).then(()=>{
        res.json({message: 'Session updated succesfully!'});
    });
}

async function getAllSessions(req, res){ 
    const sessions = await Session.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'session_user'
            }
        }
    ])
    res.json(sessions);
}

async function getSession(req, res){ 
    const searchedSession = await Session.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'session_user'
            },
            $match: {
                _id:ObjectId(req.params.id)
            }
        }
    ]);
    res.json(searchedSession);
}

module.exports = {
    getAllSessions, getSession, insertSession, deleteSession, updateSession
}