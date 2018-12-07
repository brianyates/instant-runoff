const NO_MAJORITY_MSG = 'Stalemate - No Majority!';

const calculateWinner = poll => {
    const {voters, options, winCutoff} = poll;
    let winner = null;
    let votes = [];
    let counts = {};
    let originalOptions = {};
    //Add voters' votes to an array
    for(let i = 0; i < voters.length; i++){
        votes.push(voters[i].selections);
    }
    //initialize counts objects
    for(let i = 0; i < options.length; i++){
        counts[options[i]] = 0;
        originalOptions[options[i]] = [];
    }
    //If there is only one voter, return the voter's top choice
    if(voters.length === 1){
        return ([voters[0].selections[0], originalOptions]);
    }

    while(winner === null && votes[0].length > 0){
        //Initialize the vote counts of each option to 0.
        Object.keys(counts).forEach( i => {
            counts[i] = 0;
        });

        //Increment the counts object element by one if it's the voter's first choice (i.e. the first in the array);
        for(let i = 0; i < votes.length; i++){
            counts[votes[i][0]]++;
        }

        //Show round-by-round how many votes each option is receiving
        Object.keys(originalOptions).forEach( opt => {
            originalOptions[opt].push(counts[opt])
        })

        let minValue = null;

        //Set the winner if it exists, otherwise determine which option has the lowest amount of votes and remove it.
        let countValues = [];
        Object.keys(counts).forEach( i => {
            if(counts[i] >= winCutoff){
                winner = i;
            }
            else{
                if(minValue===null || counts[i] <= minValue){
                    minValue = counts[i];
                }
            }
            countValues.push(counts[i]);
        });

        //Find all options that have the lowest vote total
        minKeyArray = Object.keys(counts).filter( key => counts[key] === minValue);

        //If all the counts are the same, no majority is reached so exit the loop
        let allValuesAreEqual = countValues.every(value => value===countValues[0]);
        if(allValuesAreEqual && !winner){
            return ([NO_MAJORITY_MSG, originalOptions]);
        }
        //Remove the option with the least amount of votes from every voter array
        votes.forEach( vote => {
            for(let i = 0; i < minKeyArray.length; i++){
                vote.splice(vote.indexOf(minKeyArray[i]),1);
            }
        })
        for(let i = 0; i < minKeyArray.length; i++){
            delete counts[minKeyArray[i]];
        }
    }
    return ([winner || NO_MAJORITY_MSG, originalOptions]);
}

module.exports = calculateWinner;