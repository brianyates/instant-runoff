const calculateWinner = poll => {
    const {voters, options} = poll;
    let winner = null;
    let votes = [];
    let counts = {};
    //Add voters' votes to array
    for(let i = 0; i < voters.length; i++){
        votes.push(voters[i].selections);
    }
    //Create counts object, initialized to 0
    for(let i = 0; i < options.length; i++){
        counts[options[i]] = 0;
    }
    //If there is only one voter, return the voter's top choice
    if(voters.length === 1){
        return voters[0].selections[0];
    }

    let winCutoff = votes % 2 === 0 ? Math.ceil(votes.length/2) + 1 : Math.ceil(votes.length/2);
    while(!winner && votes[0].length > 0){
        //Initialize the vote counts of each option to 0.
        Object.keys(counts).forEach( i => {
            counts[i] = 0;
        });

        //Increment the counts object element by one if it's the voter's first choice (i.e. the first in the array);
        for(let i = 0; i < votes.length; i++){
            counts[votes[i][0]]++;
        }
        let minKey = null;
        let minValue = null;
        //Set the winner if it exists, otherwise determine which option has the lowest amount of votes and remove it.
        Object.keys(counts).forEach( i => {
            if(counts[i] > winCutoff){
                winner = i;
            }
            else{
                if(!minKey || counts[i] < minKey){
                    minValue = counts[i];
                    minKey = i;
                }
            }
        });

        //Remove the option with the least amount of votes from every voter array
        votes.forEach( vote => {
            vote.splice(vote.indexOf(minKey),1);
        })
        delete counts[minKey];
    }
    return winner;
}

var myPoll = {
    "_id": {
        "$oid": "5c02d6eb82bf802145f7e9b6"
    },
    "options": [
        "Option Number 1",
        "Option Number 2",
        "Option Number 3"
    ],
    "totalVoters": 3,
    "votesReceived": 3,
    "allVotesReceived": true,
    "title": "What should we do?",
    "voters": [
        {
            "selections": [
                "Option Number 3",
                "Option Number 1",
                "Option Number 2"
            ],
            "voted": true,
            "_id": {
                "$oid": "5c02d6eb82bf802145f7e9b7"
            },
            "email": "BYates123@gmail.com"
        },

    ],
    "dateCreated": {
        "$date": "2018-12-01T18:46:03.272Z"
    },
    "__v": 0
};

console.log(calculateWinner(myPoll));

