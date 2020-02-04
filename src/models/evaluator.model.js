const mongoose = require('mongoose');
const {Schema} = mongoose;
const EvaluatorSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true}
});
module.exports = mongoose.model('Evaluator',EvaluatorSchema);