const startButton = document.querySelector("#start-button");
const question = document.getElementById("question");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
startButton.addEventListener("click", Start)



function Start() {
    startButton.classList.add("hide")  
questionContainer.style.display = "block";
renderQuestion();
}

// format answer:  question:
                // choice(x): 
                // answer(x):
let Questions = [
    {
    question : "The condition in an if / else statement is enclosed within_.",
    choice1 : "Quotes",
    choice2 : "Curly Brackets",
    choice3 : "Parentheses",
    choice4 : "Square Brackets",
    answer : "2"
    },
    {
    question : "Arrays in Javascript can be used to store_.",
    choice1 : "Numbers and Strings",
    choice2 : "Other Arrays",
    choice3 : "Booleans",
    choice4 : "All of the Above",
    answer : "4"
    },
    {  
    question : "Commonly used data types do not include",
    choice1 : "Strings",
    choice2 : "Booleans",
    choice3 : "Alerts",
    choice4 : "Numbers",
    answer : "3"
    },
    {
    question : "String values must be enclosed within __ when being assigned to variables.",
    choice1 : "Commas",
    choice2 : "Curly Brackets",
    choice3 : "Quotes",
    choice4 : "Parentheses",
    answer : "1"
    },
    {
    question : "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choice1 : "Javascript",
    choice2 : "Terminal/bash",
    choice3 : "For Loops",
    choice4 : "Console log",
    answer : "1"
    }
];
// TEST VARIABLES
const lastQuestion = Questions.length -1;
let Questionshown = 0;
function renderQuestion() {
    question.innerHTML = "<p>" + Questions[Questionshown].question + "</p>";
    choice1.innerHTML = Questions[Questionshown].choice1;
    choice2.innerHTML = Questions[Questionshown].choice2;
    choice3.innerHTML = Questions[Questionshown].choice3;
    choice4.innerHTML = Questions[Questionshown].choice4;
    Questionshown ++
    renderQuestion()

}
function checkAnswer (answer){
    if(Questions[Questionshown].correct === answer){
        score ++;
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }
    if(Questionshown < lastQuestion){
        count = 0;
        Questionshown++;
        questionRender();
    }
    else {
        clearInterval();
    }
}