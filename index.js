var readlineSync = require('readline-sync')

var score = 0;

// data of high scores
var highScore = [
  {
    name: "Himanshu",
    score: 4
  },
  {
    name: "Divya",
    score: 3
  }
]

// array of objects

var questions = [
  {
    question: "What is Batman's real name? ",
    answer: "Bruce wayne"
  },
  {
    question: "Who took care of him after his parents died? ",
    answer: 'alfred'
  },
  {
    question: "What is the name of his car? ",
    answer: 'batmobile'
  },
  {
    question: "Does he have Superpowers? ",
    answer: 'No'
  },
  {
    question: "What is the name of the villian that uses puzzles a lot? ",
    answer: "riddler"
  }
]

// welcome function

function welcome() {
  var usrName = readlineSync.question("What's your name? ")
  console.log("Hello " + usrName + ", welcome to Quiz on Batman!")
  console.log("----------------------------------------")
}

// play function

function play(question, answer) {

  var usrAns = readlineSync.question(question)

  if (usrAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!")

    score++
  } else {
    console.log("Wrong")
  }
  console.log("Current score: " + score)
  console.log("----------------------------------------")
}

function game() {
  for (i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}