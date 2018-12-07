const sgMail = require('@sendgrid/mail');
const {SENDGRID_SECRET_KEY, VOTER_EMAIL_TEMPLATE_ID, RESULTS_EMAIL_TEMPLATE_ID, MAIN_URI, EMAIL_FROM_FIELD} = require('../src/config/keys');
sgMail.setApiKey(SENDGRID_SECRET_KEY);

const sendVoterEmails = poll => {
    const {createdBy, voters} = poll;
    let pollID = poll._id;
    let voterEmails = voters.map( ({_id, email}) => 
        ({
            to: email,
            from: EMAIL_FROM_FIELD,
            text: `${createdBy} has invited you to vote in a new Ranked Choice Voting poll using InstantRCV. To view the poll and cast your vote, please click the link below. Thanks for using InstantRCV!`,
            templateId: VOTER_EMAIL_TEMPLATE_ID,
            dynamic_template_data: {
                createdBy: createdBy,
                mainURI: MAIN_URI,
                pollID: pollID,
                voterID: _id
            }
        })
    )
    sgMail.send(voterEmails);
}
const sendResultsEmails = poll => {
    const {voters} = poll;
    let pollID = poll._id;
    let resultsEmails = voters.map( ({email}) => 
        ({
            to: email,
            from: EMAIL_FROM_FIELD,
            text: "Hello, We wanted to let you know that all votes have been received for your recent InstantRCV poll! To view voting results, please click the link below. Thanks for using InstantRCV!",
            templateId: RESULTS_EMAIL_TEMPLATE_ID,
            dynamic_template_data: {
                mainURI: MAIN_URI,
                pollID: pollID,
            }
        })
    )
    sgMail.send(resultsEmails);
}

module.exports = {
    sendVoterEmails: sendVoterEmails,
    sendResultsEmails: sendResultsEmails
}

