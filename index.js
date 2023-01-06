var chalk = require("chalk");
var readlineSync = require('readline-sync');

var score = 0;

// data of high scores
var highScore = [
  {
    name: "Himanshu",
    score: 6
  },
  {
    name: "Divya",
    score: 5
  },
  {
    name: "Jane",
    score: 4
  },
  {
    name: "Kaushal",
    score: 4
  }
]


// array of objects

var questions = [
  {
    question: "1) What super villain once broke Batman's back, leaving him crippled and wheelchair-bound? ",
    answerList: ["JOKER", "KILLER CROC", "RA'S AL GHUL", "BANE"]
  },
  {
    question: "2) What were the names of Bruce Wayne's parents? ",
    answerList: ["GEORGE & ELAINE", "JAMES & ELIZABETH", "WAYNE & ALICE", "THOMAS & MARTHA"]
  },
  {
    question: "3) Who is credited with creating Batman? ",
    answerList: ["JACK KIRBY", "JOE SHUSTER", "JERRY SIEGEL", "BOB KANE"]
  },
  {
    question: "4) What Batman villain formerly worked as a zoologist? ",
    answerList: ["THE PENGUIN", "POISON IVY", "KILLER CROC", "MANBAT"]
  },
  {
    question: "5) What year was the character of Robin first introduced? ",
    answerList: ["1960", "1950", "1970", "1940"]
  },
  {
    question: "6) In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name? ",
    answerList: ["MR. MXYZTPLK", "BAT-MITE", "MARTIAN MANHUNTER", "BAT-DWARF"]
  },
  {
    question: "7) The original Batgirl was related to what familiar Batman character? ",
    answerList: ["THE JOKER", "BATWOMAN", "ALFRED", "COMMISSIONER GORDON"]
  },
  {
    question: "8) Which of these Bat-villains was introduced first? ",
    answerList: ["CATWOMAN", "THE PENGUIN", "THE RIDDLER", "MR. FREEZE"]
  }
]

answersIndex = [3, 3, 3, 3, 3, 1, 1, 0]


var usrName = readlineSync.question("What's your name? ")

// welcome function

function welcome() {
  console.log("")
  console.log("Hello " + chalk.blue(usrName) + ", welcome to Quiz on Batman!")
  console.log("")
  console.log("Note: Just input the number beside the option that you want to give as an answer.")
  console.log("----------------------------------------")
}

// play function

function play(question, answerList, answerIndex,i) {

  var usrAnsIndex = readlineSync.keyInSelect(answerList, question, { cancel: false })

  if (usrAnsIndex === answerIndex) {
    console.log(chalk.green("Right!"))

    score++
  } else {
    console.log(chalk.red("Wrong!"))
    console.log("Correct Answer: " + chalk.green(questions[i].answerList[answerIndex]))
  }
  console.log("Current score: " + score)
  console.log("----------------------------------------")
}

function game() {
  for (i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answerList, answersIndex[i],i)
  }
}

function showScores() {
  console.log("Your final score is: " + chalk.green(score))
  console.log("High scores are as follows: ")
  highScore.map(i => console.log(chalk.blue(i.name) + " : " + chalk.green(i.score)))
}

welcome();
game();

var scoreList = Object.values(highScore)

for (i = 0; i < scoreList.length; i++) {
  if (score >= scoreList[i].score) {
    console.log(chalk.green("Congratulations, you have beaten a high score."))
    console.log()
    highScore.splice(i, 0, { name: usrName, score: score })
    showScores()
    break
  } else {
    if (i === scoreList.length - 1) {
      console.log(chalk.red("Sorry you couldn't beat a high score. Better luck next time!"))
      showScores()
    } else {
      continue
    }

  }
}
