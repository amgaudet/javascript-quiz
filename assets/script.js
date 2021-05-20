var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var secondsLeft = 60;
var gameOn = false;

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


function gameOver(){
    //check if time left on the clock
    //display time left as score
    //Enter name/initials for high score -> local storage
    //link to high scores
}

//populate question/answers
function gameStart(){
    answerEl.textContent = "";
    //random question selector
    randomSelector = Math.floor(Math.random() * questions.length);
    //update question-title with question
    questionEl.textContent = questions[randomSelector];
    var answerChoices = answers[randomSelector];
    //populate possible answers
    for (var i = 0; i < 3; i++){
        //append new list item
        var option = document.createElement("li");
        //apply answer content
        option.textContent = answerChoices[i];
        answerEl.appendChild(option);

    }

    //removes selected question/answer from arrays
    questions.splice(randomSelector,1);
    answers.splice(randomSelector,1);

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