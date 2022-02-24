//creating object of questions,options,and answers
let questionSet = [
  {
    question: '1. Which data type stores TRUE or FALSE values?',
    option: ['array', 'number', 'boolean'],
    answer: 'boolean'
  },
  {
    question: '2. String values must be enclosed in ______?',
    option: ['brackets', 'quotes', 'semicolon'],
    answer: 'quotes'
  },
  {
    question: '3. Which of the following is not a common way to declare variables anymore?',
    option: ['let', 'var', 'const'],
    answer: 'var'
  }
]


//if start button pressed, then container (containing the question/options) appear
document.getElementById('start').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.container').style.visibility = 'visible';
  takeQuiz();
})


let questionNumber = 0;
function takeQuiz() {
  //will display first question
  document.getElementById('question').textContent = questionSet[questionNumber].question;
  //will display answerchoices
  document.getElementById('myButton1').value = questionSet[questionNumber].option[0]
  document.getElementById('myButton2').value = questionSet[questionNumber].option[1]
  document.getElementById('myButton3').value = questionSet[questionNumber].option[2]


  //checking for each answer choice 
  document.getElementById('myButton1').addEventListener('click', event => {
    if (questionSet[questionNumber].option[0] === questionSet[questionNumber].answer) {
      nextQuestion();
    }
    else {
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }

  })
  document.getElementById('myButton2').addEventListener('click', event => {
    if (questionSet[questionNumber].option[1] === questionSet[questionNumber].answer) {
      nextQuestion();
    }
    else {
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }

  })
  document.getElementById('myButton3').addEventListener('click', event => {
    if (questionSet[questionNumber].option[2] === questionSet[questionNumber].answer) {
      nextQuestion();
    }
    else {
      document.getElementById('verifyAnswer').innerHTML = "WRONG, TRY AGAIN!"
    }

  })
}

//will move onto next question if user gets it right
function nextQuestion() {
  //gets rid of the 'wrong answer' sign from the previous question
  document.getElementById('verifyAnswer').innerHTML = "";
  questionNumber = questionNumber + 1;
  //if it is at the last question, will display final score
  if (questionNumber > 2) {
    return; //need to call fxn that will go to game over page
  }
  takeQuiz();
}

function gameOver() {

}