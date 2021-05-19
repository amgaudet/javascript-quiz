var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var secondsLeft = 60;

var questions = ["q1", "q2", "q3", "q4"];
var answers = [["a1a", "a1b", "a1c"],["a2a", "a2b", "a2c"],["a3a", "a3b", "a3c"],["a4a", "a4b", "a4c"],];

//loads initial screen, runs on init
function setStarterScreen(){
    questionEl.textContent = "Welcome to the Javascript quiz. Select the correct answer to each question. Wrong answers subrats 10 seconds from the timer. You've lost when the time is up";
    answerEl.textContent = "Start Quiz";
}

function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0 ) {
            clearInterval(timerInterval);
            //function gameOver();
        }
    }, 1000);
}

// function gameStart(){
//     //random question selector
//     randomQuestion = Math.floor(Math.random(questions.length))
//     //update question-title with question
//     questionEl.textContent = 
//     //populate possible answers
// }

answerEl.addEventListener("click", function(){
    setTimer();
    //gameStart();
});

function init (){
    setStarterScreen();
}

init ();