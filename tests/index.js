const NO_MAJORITY_MSG = 'NO MAJORITY!';
const calculateWinner = poll => {
  const {voters, options} = poll;
  let winner = null;
  let votes = [];
  let counts = {};
  //Add voters' votes to an array
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
      let countValues = [];
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
          countValues.push(counts[i]);
      });

      //If all the counts are the same, no majority is reached so exit the loop
      let allValuesAreEqual = countValues.every(value => value===countValues[0]);
      if(allValuesAreEqual && !winner){
          return NO_MAJORITY_MSG;
      }

      //Remove the option with the least amount of votes from every voter array
      votes.forEach( vote => {
          vote.splice(vote.indexOf(minKey),1);
      })
      delete counts[minKey];
  }
  return winner || NO_MAJORITY_MSG;
}

const newPoll = {
  "_id": {
      "$oid": "5c09d4f1059fbc69c8b714f4"
  },
  "options": [
      "Dog",
      "Cat",
      "Sheep"
  ],
  "votesReceived": 1,
  "allVotesReceived": true,
  "winner": "Cat",
  "createdBy": "Brian Yates",
  "title": "Is This Our First Email?",
  "voters": [
      {
          "selections": [
              "Cat",
              "Dog",
              "Sheep"
          ],
          "voted": true,
          "_id": {
              "$oid": "5c09d4f1059fbc69c8b714f5"
          },
          "email": "byates123@gmail.com"
      },
      {
        "selections": [
            "Dog",
            "Sheep",
            "Cat"
        ],
        "voted": true,
        "_id": {
            "$oid": "5c09d4f1059fbc69c8b714f5"
        },
        "email": "byates123@gmail.com"
    },
    {
      "selections": [
          "Dog",
          "Cat",
          "Sheep"
      ],
      "voted": true,
      "_id": {
          "$oid": "5c09d4f1059fbc69c8b714f5"
      },
      "email": "byates123@gmail.com"
  }
  ],
  "totalVoters": 1,
  "dateCreated": {
      "$date": "2018-12-07T02:03:29.928Z"
  },
  "__v": 0
}

console.log(calculateWinner(newPoll))