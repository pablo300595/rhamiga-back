const mongoose = require('mongoose');
const {Schema} = mongoose;
const CandidateSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    sex: {type: String, required: false, default: null},
    nationality: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: false, default: null},
    phoneNumber: {type: String, required: false, default: null},
    career: {type: String, required: false, default: null},
    careerLevel: {type: String, required: false, default: null},
    category: {type: String, required: false, default: null},
    experience: {type: Number, required:false, default:0},
    languages: {type:[Object], required: false},
    resume: {type: Object, required: false, default: null},
    status: {type: String, required: true},
}); 
module.exports = mongoose.model('Candidate', CandidateSchema);