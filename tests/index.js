const calculateWinner = require('../routes/routeHelpers');

const newPoll = {
  "winCutoff": 2,
  "options": [
      "Eman",
      "Jim",
      "Kevin",
      "JMart",
      "Yezo",
      "Jamie"
  ],
  "voters": [
      {
          "selections": [
              "Jim",
              "Jamie",
              "Eman",
              "Yezo",
              "Kevin",
              "JMart"
          ]
      },
      {
        "selections": [
            "Kevin",
            "Jim",
            "Jamie",
            "JMart",
            "Yezo",
            "Eman"
        ]
    },
    {
        "selections": [
            "Jamie",
            "Kevin",
            "Eman",
            "Jim",
            "Yezo",
            "JMart"
        ]
    }
  ]
}

console.log(calculateWinner(newPoll))