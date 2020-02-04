const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    credential: {type: String, required: true},
    registrationDate: {type: Date, required: true},
    active: {type: Boolean, required: false, default: false},
    candidate: {type: Schema.ObjectId, ref: 'Candidate', default: null},
    recruiter: {type: Schema.ObjectId, ref: 'Recruiter', default: null},
    evaluator: {type: Schema.ObjectId, ref: 'Evaluator', default: null},
});

module.exports = mongoose.model('User',UserSchema);