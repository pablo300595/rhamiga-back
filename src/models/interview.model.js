const mongoose = require('mongoose');
const {Schema} = mongoose;

const InterviewScheme = new Schema({
    interviewStart: {type: String, required: true},
    interviewDuration: {type: Number, required: true},
    feedback: {type: String, required: true},
    status: {type: String, required: true},
    InterviewType: {type: String, required: true},
    candidate: {type: Schema.ObjectId, ref: 'Candidate'},
    evaluator: {type: Schema.ObjectId, ref: 'Evaluator'}
});

module.exports = mongoose.model('Interview', InterviewScheme);