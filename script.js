//creating object of questions,options,and answers
const questionSet = [
  {
    question: '1) Which data type stores TRUE or FALSE values?',
    option: ['array', 'number', 'boolean'],
    answer: 'boolean'
  },
  {
    question: '2) String values must be enclosed in ______?',
    option: ['brackets', 'quotes', 'semicolon'],
    answer: 'quotes'
  },
  {
    question: '3) Which of the following is not a common way to declare variables anymore?',
    option: ['let', 'var', 'const'],
    answer: 'var'
  },
  {
    question: '4) What do you use to end each statement in javascript',
    option: ['semicolon', 'period', 'colon'],
    answer: 'semicolon'
  }
];


//default settings for quiz 
let questionNumber = 0;
let scoreCount = 100;

function defaultQuiz () {
  
  document.querySelector('.container').style.visibility = 'visible';
  document.getElementById('question').textContent = questionSet[questionNumber].question;

  //will display first default question
  document.getElementById('myButton1').value = questionSet[questionNumber].option[0]
  document.getElementById('myButton2').value = questionSet[questionNumber].option[1]
  document.getElementById('myButton3').value = questionSet[questionNumber].option[2]

}

//if start button pressed, then container (containing the question/options) appear and triggers the entire runthrough of the game

document.getElementById('start').addEventListener('click', event => {
  defaultQuiz();
})






//checking for each answer choice ; if correct, calls on the nextQuestion() method ; if wrong answer, deducts -10 points; also when it reaches the last question, it will call the gameOver() method
document.getElementById('myButton1').addEventListener('click', event => {
  if (questionSet[questionNumber].option[0] === questionSet[questionNumber].answer) {
    //run through this if statement if you complete the last question; this will make the container disappear and will call on the gameOver method;
    if (questionNumber == (questionSet.length - 1)) {
      document.getElementById('verifyAnswer').innerHTML = "";
      document.querySelector('.container').style.display = 'none';
      gameOver();
      return;
    }
    nextQuestion();
  }
  else {
    scoreCount -= 10;
    document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
  }

})
document.getElementById('myButton2').addEventListener('click', event => {
  if (questionSet[questionNumber].option[1] === questionSet[questionNumber].answer) {
    if (questionNumber == (questionSet.length - 1)) {
      document.getElementById('verifyAnswer').innerHTML = "";
      document.querySelector('.container').style.display = 'none';
      gameOver();
      return;
    }
    nextQuestion();
  }
  else {
    scoreCount -= 10;
    document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
  }

})
document.getElementById('myButton3').addEventListener('click', event => {
  if (questionSet[questionNumber].option[2] === questionSet[questionNumber].answer) {
    if (questionNumber == (questionSet.length - 1)) {
      document.getElementById('verifyAnswer').innerHTML = "";
      document.querySelector('.container').style.display = 'none';
      gameOver();
      return;
    }
    nextQuestion();
  }
  else {
    scoreCount -= 10;
    document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
  }

})



//will move onto next question if user gets it right
function nextQuestion() {
  //gets rid of the 'wrong answer' sign from the previous question
  document.getElementById('verifyAnswer').innerHTML = "";
  questionNumber++;


  //updates to the new following question
  document.getElementById('question').textContent = questionSet[questionNumber].question;
  document.getElementById('myButton1').value = questionSet[questionNumber].option[0];
  document.getElementById('myButton2').value = questionSet[questionNumber].option[1];
  document.getElementById('myButton3').value = questionSet[questionNumber].option[2];

}



//when game is over, will display total score and a form where the user can save initials and score
function gameOver() {
  document.querySelector('.gameOver').style.visibility = 'visible';
  document.getElementById('score').innerHTML = scoreCount;

}

//when you click submit, the initial and score gets saved in local storage; also reset scoreCount after
document.getElementById('submitBtn').addEventListener('click', event => {
  event.preventDefault();
  let userInitial = document.getElementById('initial').value;
  //put the intiial and score in local storage
  localStorage.setItem("initial", userInitial);
  localStorage.setItem("score", scoreCount);

  renderPastScore();




}
)

function renderPastScore() {
  let initial = localStorage.getItem("initial");
  let score = localStorage.getItem("score");
  //check if there's nothing -> if so, just return
  if (!initial || !score) {
    return;
  }

  let list = document.getElementById('listScores');
  let listItem = document.createElement('li');
  listItem.textContent = initial + " : " + score;

  // list.textContent = initial ' : ' score;
  list.appendChild(listItem);
}

//when you click Past Scores, you can see your past scores
document.getElementById('modalBtn').addEventListener('click', event => {
  //make modal visible
  document.getElementById('scoreModal').style.display = 'block';

})

//if you click on close button, the modal should disappear
document.getElementById('closeBtn').addEventListener('click', event => {
  document.getElementById('scoreModal').style.display = 'none';
})

//if you click on X button, the modal should also disappear
document.getElementById('xBtn').addEventListener('click', event => {
  document.getElementById('scoreModal').style.display = 'none';
})

//if you click on erase past scores, the previous scores should all clear
document.getElementById('eraseBtn').addEventListener('click', event => {
  document.getElementById('listScores').innerHTML = "";
})


//play again button
document.getElementById('playAgainBtn').addEventListener('click', event => {

  
  //game over sign should disappear
  document.querySelector('.gameOver').style.visibility = 'hidden';

  document.querySelector('.container').style.display = 'block';
  questionNumber = 0;
  scoreCount = 100;
  defaultQuiz();
  
 
})