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
    question: '3) Which of the following is not a common way to declare variables anymore?',
    option: ['let', 'var', 'const'],
    answer: 'var'
  }
];


//if start button pressed, then container (containing the question/options) appear and triggers the entire runthrough of the game
document.getElementById('start').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.container').style.visibility = 'visible';
  
  takeQuiz();

})


let questionNumber = 0;
let scoreCount = 0;

function takeQuiz() {
  //will display first question
  document.getElementById('question').textContent = questionSet[questionNumber].question;
  
  //will display answerchoices
  document.getElementById('myButton1').value = questionSet[questionNumber].option[0]
  document.getElementById('myButton2').value = questionSet[questionNumber].option[1]
  document.getElementById('myButton3').value = questionSet[questionNumber].option[2]
  

  //checking for each answer choice ; if correct, score increases by 10 ; if wrong answer, deducts -2 points
  document.getElementById('myButton1').addEventListener('click', event => {
    if (questionSet[questionNumber].option[0] === questionSet[questionNumber].answer) {
      scoreCount += 10;
      nextQuestion();
    }
    else {
      scoreCount -= 2;
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }

  })
  document.getElementById('myButton2').addEventListener('click', event => {
    if (questionSet[questionNumber].option[1] === questionSet[questionNumber].answer) {
      scoreCount += 10;
      nextQuestion();
    }
    else {
      scoreCount -= 2;
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }

  })
  document.getElementById('myButton3').addEventListener('click', event => {
    if (questionSet[questionNumber].option[2] === questionSet[questionNumber].answer) {
      scoreCount += 10;
      nextQuestion();
    }
    else {
      scoreCount -= 2;
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }
  
  })
  
}

//will move onto next question if user gets it right
function nextQuestion() {
  //gets rid of the 'wrong answer' sign from the previous question
  document.getElementById('verifyAnswer').innerHTML = "";
  
  questionNumber++;
  console.log(questionNumber);
  if (questionNumber>questionSet.length) {
    console.log(no);

  }
  takeQuiz();
  
  
}


//when game is over, will display total score and a form where the user can save initials and score
function gameOver() {
  return;
  // document.querySelector('.gameOver').visibility = 'visible';
  // document.getElementById('score').innerHTML = scoreCount;
}