var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question-title");
var answerEl = document.querySelector("#answers");
var scoresEL = document.querySelector("#scores");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scoreBoardEl = document.querySelector("#scoreboard");
var topScores = document.querySelector("#scores");
var secondsLeft = 10;
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

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= 0 || (questionCounter >= 6)) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

//form built in HTML switch vars
function gameOver() {
    timerEl.textContent = "";
    answerEl.textContent = "";
    var score = secondsLeft;
    if (score < 0){
        score = 0;
    }
    var prompt = document.createElement("p");
    var name = document.createElement("input");
    name.setAttribute("type", "text");
    var submit = document.createElement("button");
    submit.setAttribute("class", "submitter");

    questionEl.textContent = "Your score is: " + score;

    scoresEL.appendChild(prompt);
    scoresEL.appendChild(name);
    scoresEL.appendChild(submit);
    prompt.textContent = "Enter Initials: ";
    submit.textContent = "Submit!";

    
    scoresEL.addEventListener("submit", function (event) {
        event.preventDefault();
        var initials = name.value;
        var entry = { initials: initials, score: score };
        highScores = highScores.concat(entry);
        localStorage.setItem("highScores", JSON.stringify(highScores.concat(entry)));


    })


}

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

if (questionEl) {
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
            }
        }
    });

    questionEl.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            runGame();
            setTimer();
        }
    })
}

function listScores() {
    scoreBoardEl.textContent = "High Scores:"
    var sortedScore = highScores.sort(function(a, b) {
        return a.score > b.score;
    });
    for (var item of sortedScore) {
        var liEl = document.createElement("li");
        liEl.textContent = item.initials + ": " + item.score;
        topScores.appendChild(liEl);
    }

}


function init() {
    if (questionEl){
        setStarterScreen();
    } else {
        listScores();
    }
}

init();