const startButton = document.querySelector("#start-button");
const question = document.getElementById("question");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const count = 0;
const score = 0;
const timer = 0;
const currentQuestionIndex = 0;
const questioncontainer = document.getElementById("questioncontainer");   
startButton.addEventListener("click", Start)



function Start() {
    startButton.classList.add("hide")  
questionContainer.style.display = "block";
let titleelement = document.querySelector(".Title");
    titleelement.style.display = "none";

renderQuestion();
}

// format answer:  question:
                // choice(x): 
                // answer(x):
let questions = [
    {
    question: "The condition in an if / else statement is enclosed within_.",
    choice: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], 
    correctAnswer: "Curly Brackets"
    
  
    },
    {
    question: "Arrays in Javascript can be used to store_.",
    choice: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    correctAnswer: "All of the Above"
    },
    {  
    question: "Commonly used data types do not include",
    choice: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts"
    },
    {
    question: "String values must be enclosed within __ when being assigned to variables.",
    choice: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: "Commas"
    },
    {
    question : "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choice: ["Javascript", "Terminal/bash", "For Loops", "Console log"],
    correctAnswer: "Javascript"
    }
];
// TEST VARIABLES
let questionshown = 0;
function renderQuestion() {
    const lastQuestion = questions.length -1;
    if (currentQuestionIndex <= lastQuestion){
        document.getElementById("title").innerHTML = questions[currentQuestionIndex].question
        renderQuestionChoices();
        //rendering the question on the page..using JS variables.. 
        //always have to use currentQuestionIndex when rending questions. 
    }
function renderQuestionChoices() {
    let questionL = questions[currentQuestionIndex].choice
    for (let index = 0; index < questionL.length; index++) {
        var questionChoiceDiv = document.getElementById("questionChoices")
        var choiceradio = document.createElement("button")
        choiceradio.innerHTML = questions[index].choice;
        choiceradio.setAttribute("type", "radio");
        var label =document.createElement("label");
        label.htmlFor = "text" + questionL;
        choiceradio.setAttribute(
            "onclick", "index"
          );
        
    }
    questionChoiceDiv.append(choiceradio);
}
// function to check answer


    // let currentquestion = questions[currentQuestionIndex]; 
    // let questionelement = currentquestion.question;
    // currentquestion.choices


    }
    // question.innerHTML = "<p>" + questions[questionshown].question + "</p>";
    // choice1.innerHTML = questions[questionshown].choice1;
    // choice2.innerHTML = questions[questionshown].choice2;
    // choice3.innerHTML = questions[questionshown].choice3;
    // choice4.innerHTML = questions[questionshown].choice4;
    // questionshown ++
    // renderQuestion()


// function checkAnswer (answer){
//     if(questions[questionshown].correct === answer){
//         score ++;
//         // answerIsCorrect();
//     }
//     else { 
//         questions[questionshown].correct !== answer
//         score --;
//         // answerIsWrong();
//     }
//     if(questionshown < lastQuestion){
//         questionshown++;
//         questionRender();
//     }
//     else {
//         clearInterval();
//     }
