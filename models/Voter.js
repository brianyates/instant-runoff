const mongoose = require('mongoose');
const {Schema} = mongoose;

const voterSchema = new Schema({
    email: String,
    selections: Array,
    voted: {type: Boolean, default: false}
});

module.exports = voterSchema;