const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecruiterSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    //interview: {type: Schema.ObjectId, required: true},
    phoneNumber: {type: String, required: true},
    //candidates: {type: Schema.ObjectId, required: true},
});
module.exports = mongoose.model('Recruiter',RecruiterSchema);