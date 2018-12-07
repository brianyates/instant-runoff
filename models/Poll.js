const mongoose = require('mongoose');
const { Schema } = mongoose;
const VoterSchema = require('./Voter');

const pollSchema = new Schema({
    title: String,
    options: Array,
    createdBy: String,
    voters: [VoterSchema],
    dateCreated: Date,
    totalVoters: Number,
    votesReceived: {type: Number, default: 0},
    allVotesReceived: {type: Boolean, default: false},
    winner: {type: String, default: null},
    winCutoff: Number,
    resultArray: Array
});

mongoose.model('polls', pollSchema);