var state = 'code';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var timerEl = document.querySelector("#countdown");
var timeEl = document.querySelector("#time");
var quizquestionsEl = document.querySelector("#questions");
var secondsLeft = 60;
var submitBtn = document.querySelector('#start');

var position = 0;
function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
}

function init() {
  displayState();
}


startBtn.addEventListener("click", function() {
  state = 'quiz';
  displayState();
});

quizTitle.addEventListener("click", function () {
  state = 'end';
  displayState();
});

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

    }
    function showResults(questions, quizContainer, resultsContainer) {

    }
    showQuestions(questions,quizContainer,resultsContainer);
}

var quizquestionsEl = [
    {
        Question1: "How many seconds are in a day?",
        answers: {
            a: '46,800',
            b: '86,400',
            c: '64,800'
        },
        correctAnswer: 'B'
    },
    {
        Question2: "When was the first programming language developed?",
        answers: {
            a: '1983',
            b: '1383',
            c: '1883'

        },
        correctAnswer: 'C'
    },
    {
        Question3: "When was the first website introduced to the world?",
        answers: {
            a: '1991',
            b: '2001',
            c: '1919'
        },
        correctAnswer: 'A'
    }
    ];


function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++) {

        answers = [];

    for(letter in questions[i].answers) {

        answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ':'
            + questions[i].answers[letter]
        + '</label>'

        );
    }

}
}

output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);

Container.innerHTML = output.join('');

showQuestions(questions,quizContainer);

function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainerl.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;

    
    for(var i=0; i<questions.length; i++) {


    userAnswer = (answerContainers[i].querySelector('input[name=question'))
    }
}


function pushToLocalStorageArray() {
    var arr = JSON.parse(localStorage.getItem('array')) || [];
    arr.push('val');

    localStorage.setItem('array', JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem('array')));
}
init();