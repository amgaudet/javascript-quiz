var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var secondsLeft = 60;
var gameOn = false;

var questions = {
    question: ["What does HTML stand for?", "What is the correct syntax in HTML for a paragraph element?", "What does CSS stand for?", "What is the correct syntax to define an array in javascript?", "Where is the correct place to insert CSS in your HTML document?", "Which of these will define a function in javascript?"],
    answers: [["Hypertext Markup Language", "Hyperlink Text Mixer Language", "Hit The Millions", "How To Make Lists"], ["<p>", "<paragraph>", "[p]", "<Im making a new paragraph here>"], ["Cascading Style Sheets", "Cheap Shot Sucka!!", "Current Style Syntax", "Communication Styling Services"], ["var x = [];", "var x = {};", "var x = []", "var x = this is an array."], ["In the head", "Inline, always", "At the bottom of the body", "Inject with a needle"], ["function fun()", "fun() the function", "fun() var", "fun() I'm making a function here!"]]
}

//loads initial screen, runs on init
function setStarterScreen(){
    var start = document.createElement("button");
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


    //display time left as score
    //Enter name/initials for high score -> local storage
    //link to high scores
}

//populate question/answers
function gameStart(){
    // stopClock();
    answerEl.textContent = "";
    //random question selector
    randomSelector = Math.floor(Math.random() * questions.question.length);
    //update question-title with question
    if (questions.question.length === 0){
        gameOver();
    } else {
        questionEl.textContent = questions.question[randomSelector];
        var answerChoices = questions.answers[randomSelector];
        console.log(typeof answerChoices);
        //populate possible answers
        for (var i = 0; i < 4; i++){
            //append new list item
            var option = document.createElement("button");
            option.setAttribute("class", "answer-choice");
            //apply answer content
            option.textContent = answerChoices[i];
            answerEl.appendChild(option);
        
        }       
        //removes selected question/answer from arrays
        questions.question.splice(randomSelector,1);
        questions.answers.splice(randomSelector,1);
    }
}


answerEl.addEventListener("click", function(event){
        if (!gameOn){
            gameOn = true;
            setTimer();
            gameStart();
        } else  {
            gameStart();
        }
});


function init (){
    setStarterScreen();
}

init ();