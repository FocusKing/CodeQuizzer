const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
}


function selectAnswer() {

}




const questions = [
    {
        question: 'How many seconds are in a day?',
        answers: [
            {text: '46,800', correct: false},
            {text: '86,400', correct: true}

            ]

        }
]

    // function setNextQuestion() {
    //     resetState()
    //     showQuestions(shuffledQuestions[currentQuestionIndex])
    // }

    // function showQuestions(question) {
    // questioneElement.innerText = question.question
    // question.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsElement.appendChild(button)
    // })
    // }


    // function startGame() {
    //     console.log('Started')

    // }startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')


    // function setNextQuestion() {


    // }

    // function resetState() {
    //     nextButton.classList.add('hide')
    //     while (answerButtonsElement.firstChild) {
    //         answerButtonsElement.removeChild
    //         (answerButtonsElement.firstChild)
    //     }
    // }
    // function selectAnswer(e) {
    //     const selectedButton = e.target
    //     const correct = selectedButton.dataset.correct
    //     setStatusClass(document.body, correct)
    //     Array.from(answerButtonsElement.children).forEach(button => {
    //         setStatusClass(button,button.dataset.correct)

    //     })
    //     if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //         nextButton.classList.remove('hide')
    //     } else {
    //             startButton.innerText = 'Restart'
    //             startButton.classList.remove('hide')
    //         }

    //     }

        


    // function setStatusClass(element, correct) {
    //     clearStatusClass(element)

    //     if (correct) {
    //         element.classList.add('correct')
    //     } else {
    //         element.classList.add('wrong')
    //     }
    // }

    // function clearStatusClass(element) {
    //     element.classList.remove('correct')
    //     element.classList.remove('wrong')
    // }
    //     if (correct) {
    //         element.classList.add('correct')
    //     } else {
    //         element.classList.add('wrong')
    //     }



    // const questions = [

    // { 
    //     Question1: "How many seconds are in a day?",
    //     answers: [
    //     {a: '46,800', correct: false},
    //     {b: '86,400', correct: true }
    //     ]
    // }

    // {  
    //         Question2: "When was the first programming language developed?",
    //     answers: {
    //         a: '1983',
    //         b: '1383',
    //         c: '1883'

    //     },
    //     correctAnswer: 'C'
    // },
    // {
    //     Prompt3: "When was the first website introduced to the world?",
    //     answers: {
    //         a: '1991',
    //         b: '2001',
    //         c: '1919'
    //     },
    //     correctAnswer: 'A'
    // }

    // ];




