const mongoose = require('mongoose');
const {Schema} = mongoose;
const CandidateSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    status: {type: String, required: true},
    resume: {type: Object, required: false, default: null},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    nationality: {type: String, required: true},
    certifications: {type: [Object], required: false},
    languages: {type:[Object], required: true},
    experience: {type: Number, required:false, default:0},
    career: {type: String, required: true},
    degree: {type: String, required: true},
    category: {type: String, required: true},
    sex: {type: String, required: true}
}); 
module.exports = mongoose.model('Candidate', CandidateSchema);