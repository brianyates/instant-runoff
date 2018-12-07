const mongoose = require('mongoose');
const Poll = mongoose.model('polls');
const calculateWinner = require('./routeHelpers');
const {sendVoterEmails, sendResultsEmails} = require('../services/mailerActions');

const capitalizeName = fullName =>{
    return fullName.split(' ').map(name => (name[0].toUpperCase() + name.slice(1))).join(' ')
}

module.exports = app => {
    
    //Create a poll
    app.post('/api/create-poll',  async (req, res) => {
        try{
            let {createdBy, emails, title, options} = req.body;
            options = options.filter( option => option.length > 0);
            voters = emails.split(',').map(email => ({ email: email.trim() }));
            const poll = new Poll({
                createdBy: capitalizeName(createdBy),
                title,
                options,
                voters,
                totalVoters: voters.length,
                dateCreated: Date.now()
            });
            let savedPoll = await poll.save();
            sendVoterEmails(savedPoll);
            res.status(201).send(poll.id);
        }
        catch(err){
            console.log(err);
            res.sendStatus(501);
        }
    })

    //Get one poll for voter
    app.get('/api/poll/:pollID/voter/:voterID', async (req, res) => {
        try{
            const {pollID, voterID} = req.params;
            const poll = await Poll.findOne({_id: pollID})
            const voter = poll.voters.id(voterID);
            if(voter){
                if(voter.voted){
                    res.sendStatus(401);
                }
                else{
                    res.send({title: poll.title, options: poll.options})
                }
            }
            else{
                res.sendStatus(400);
            }
        }
        catch(err){
            console.log(err);
            res.sendStatus(400);
        }
    })

    //Submit vote and update poll subdocument
    app.post('/api/poll/:pollID/voter/:voterID', async (req, res) => {
        try{
            const {params: {pollID, voterID}, body} = req;
            const poll = await Poll.findOneAndUpdate({
                _id: pollID,
                voters: {
                    $elemMatch: {_id: voterID, voted: false}
                }
            }, {
                $inc: {'votesReceived': 1},
                $set: {'voters.$.selections': body, 'voters.$.voted': true}
            }, {
                new: true
            }).exec();
            if(poll){
                if(poll.votesReceived === poll.totalVoters){
                    const winner = calculateWinner(poll);
                    const completedPoll = await Poll.findOneAndUpdate({_id: pollID},
                                                    {$set: {'allVotesReceived' : true, 'winner': winner}});
                    sendResultsEmails(completedPoll);
                }
                res.sendStatus(202);
            }
            else{
                res.sendStatus(401);
            }
        }
        catch(err){
            console.log(err);
            res.sendStatus(400);
        }
    })

    //Get one poll for voting results
    app.get('/api/results/:pollID', async (req, res) => {
        try{
            const {pollID} = req.params;
            const poll = await Poll.findOne({_id: pollID})
            res.status(200).send(poll);
        }
        catch(err){
            console.log(err);
            res.sendStatus(400);
        }
    })
}