const calculateWinner = require('../routes/routeHelpers');

const newPoll = {

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
            "Jamie",
            "Jim",
            "Kevin",
            "JMart",
            "Yezo",
            "Eman"
        ]
    },
    {
        "selections": [
            "Jim",
            "Eman",
            "Kevin",
            "Jamie",
            "Yezo",
            "JMart"
        ]
    }
  ]
}

console.log(calculateWinner(newPoll))