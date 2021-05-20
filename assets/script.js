var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var secondsLeft = 60;
var gameOn = false;

// var questions = ["q1", "q2", "q3", "q4"];
// var answers = [["a1a", "a1b", "a1c"],["a2a", "a2b", "a2c"],["a3a", "a3b", "a3c"],["a4a", "a4b", "a4c"],];

var questions = {
    question: ["Question number 1", "Question number 2", "Question number 3", "Question number 4", "Question number 5", "Question number 6"],
    answers: [["Answer 1a", "Answer 1b", "Answer 1c", "Answer 1d"], ["Answer 2a", "Answer 2b", "Answer 2c", "Answer 2d"], ["Answer 3a", "Answer 3b", "Answer 3c", "Answer 3d"], ["Answer 4a", "Answer 4b", "Answer 4c", "Answer 4d"], ["Answer 5a", "Answer 5b", "Answer 5c", "Answer 5d"], ["Answer 6a", "Answer 6b", "Answer 6c", "Answer 6d"]]
}

//loads initial screen, runs on init
function setStarterScreen(){
    var start = document.createElement("button")
    start.textContent = "Start Quiz";
    questionEl.textContent = "Welcome to the Javascript quiz. Select the correct answer to each question. Wrong answers subrats 10 seconds from the timer. You've lost when the time is up";
    answerEl.appendChild(start);
    
}

function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0 ) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}


function gameOver(){
    //check time left on the clock
    var score = secondsLeft;

    questionEl.textContent = "Your score is: " + score;
    //display time left as score
    //Enter name/initials for high score -> local storage
    //link to high scores
}

//populate question/answers
function gameStart(){
    answerEl.textContent = "";
    //random question selector
    randomSelector = Math.floor(Math.random() * questions.question.length);
    //update question-title with question
    questionEl.textContent = questions.question[randomSelector];
    var answerChoices = questions.answers[randomSelector];
    console.log(typeof answerChoices);
    //populate possible answers
    for (var i = 0; i < 4; i++){
        //append new list item
        var option = document.createElement("button");
        //apply answer content
        option.textContent = answerChoices[i];
        answerEl.appendChild(option);

    }

    //removes selected question/answer from arrays
    questions.question.splice(randomSelector,1);
    questions.answers.splice(randomSelector,1);
    
    if (questions.length === 0){
        gameOver();
    }

}

answerEl.addEventListener("click", function(){
    if (!gameOn){
        gameOn = true;
        setTimer();
        gameStart();
    } else {
        gameStart();
    }
});


function init (){
    setStarterScreen();
}

init ();