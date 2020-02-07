const mongoose = require('mongoose');
const {Schema} = mongoose;

const sessionSchema = new Schema({
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    sessionStart: {type: Date, required:true},
    sessionEnd: {type: Date, required:false, default: null},
    active: {type: Boolean, required:true, default: false}
});

module.exports = mongoose.model('Session', sessionSchema);