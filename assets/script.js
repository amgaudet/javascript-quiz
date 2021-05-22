var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var secondsLeft = 60;
var gameOn = false;
var questionCounter = 0;

var questions = {
    question: ["What does HTML stand for?", "What is the correct syntax in HTML for a paragraph element?", "What does CSS stand for?", "What is the correct syntax to define an array in javascript?", "Where is the correct place to insert CSS in your HTML document?", "Which of these will define a function in javascript?"],
    answers: [["Hypertext Markup Language", "Hyperlink Text Mixer Language", "Hit The Millions", "How To Make Lists"], ["<p>", "<paragraph>", "[p]", "<Im making a new paragraph here>"], ["Cascading Style Sheets", "Cheap Shot Sucka!!", "Current Style Syntax", "Communication Styling Services"], ["var x = [];", "var x = {};", "var x = []", "var x = this is an array."], ["In the head", "Inline, always", "At the bottom of the body", "Inject with a needle"], ["function fun()", "fun() the function", "fun() var", "fun() I'm making a function here!"]]
}

function setStarterScreen() {
    var start = document.createElement("button");
    start.textContent = "Start Quiz";
    start.setAttribute("class", "starter");
    questionEl.textContent = "Welcome to the Javascript quiz. Select the correct answer to each question. Wrong answers subtracts 10 seconds from the timer. You've lost when the time is up";
    questionEl.appendChild(start);

}

questionEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        runGame();
        setTimer();
    }
})

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= 0 && (questionCounter < 6)) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

//form built in HTML switch vars
function gameOver() {
    answerEl.setAttribute("display", "none");
    var score = secondsLeft;
    var submission = document.createElement("form");
    var name = document.createElement("textarea");
    var submit = document.createElement("button");

    submit.setAttribute("class", "submitter");
    var prompt = document.createElement("p");

    questionEl.textContent = "Your score is: " + score;
    questionEl.appendChild(submission);
    submission.appendChild(prompt);
    submission.appendChild(name);
    submission.appendChild(submit);
    prompt.textContent = "Enter Initials: ";
    submit.textContent = "Submit!";

    questionEl.addEventListener("click", function () {

    })

}


// function gameStart(){

//     answerEl.textContent = "";
//     randomSelector = Math.floor(Math.random() * questions.question.length);
//     if (questions.question.length === 0){
//         gameOver();
//     } else {
//         questionEl.textContent = questions.question[randomSelector];
//         var answerChoices = questions.answers[randomSelector];

//         for (var i = 0; i < 4; i++){
//             var option = document.createElement("button");

//             option.setAttribute("class", "answer-choice");
//             option.textContent = answerChoices[i];
//             answerEl.appendChild(option);
//         }       
//         questions.question.splice(randomSelector,1);
//         questions.answers.splice(randomSelector,1);
//     }
// }

function runGame() {
    questionEl.textContent = questions.question[questionCounter];
    var answerChoices = questions.answers[questionCounter];
    answerEl.textContent = "";

    for (var i = 0; i < answerChoices.length; i++) {
        var option = document.createElement("button");

        option.setAttribute("class", "answer-choice");
        option.setAttribute("data-index", i);
        option.textContent = answerChoices[i];
        answerEl.appendChild(option);
    }
}


answerEl.addEventListener("click", function (event) {
    var clickTarget = event.target;
    var state = clickTarget.getAttribute("data-index");

    if (clickTarget.matches("button")) {
        questionCounter++;
        //check if right answer
        if (questionCounter < questions.question.length) {
            if (state == 0) {
                runGame();
            } else {
                secondsLeft -= 10;
                runGame();
            }
        } else {
            gameOver();
        }
    }
});


function init() {
    setStarterScreen();
}

init();