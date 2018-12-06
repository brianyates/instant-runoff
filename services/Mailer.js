const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const {SENDGRID_SECRET_KEY} = require('../src/config/keys');

class Mailer extends helper.Mail {
    constructor(sender, pollID, voterID){
        super();
        this.sgAPI = sendgrid(SENDGRID_SECRET_KEY);
        this.from_email = new helper.Email('no-reply@instantrcv.com');
        this.subject = `${sender} Needs Your Vote!`;
        this.body = new helper.Content('text/html', pollID);
        this.recipients = this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addRecipients();
    }
    formatAddresses(recipients){
        return recipients.map( ({email}) => {
            return new helper.Email(email);
        })
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recipients.forEach( recipient => {
            personalize.addTo(recipient)
        });
        this.addPersonalization(personalize);
    }

    async send(){
        const request = this.sgAPI.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        const response = await this.sgAPI.API(request);
        return response;
    }
};

module.exports = Mailer;