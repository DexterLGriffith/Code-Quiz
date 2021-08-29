const startButton = document.querySelector("#start-button");
const allQuestionsContainer = document.querySelector("#allQuestions");
const question = document.querySelector("#questionTitle");
const answers = document.querySelector("#answersTitle");
startButton.addEventListener("click", Start)

// console.log("start")
function Start() {
    startButton.classList.add("hide")
    allQuestionsContainer.classList.remove("hide")
    allQuestions = {...question}
    score = 0 
    length =""
    // setNextQuestion()







}
var i = 0; 
var lengthQ = allQuestions;
var correctAnswer = true


function showQuestion() {
    var allQuestions = allQuestions[i];
    questionTitle.innerText = allQuestions.question;

    answersList.innerHTML = "";
    for(key in allQuestions.answers){
        var radioBtnName = "question" + i + "choice";
        var choiceText = allQuestions.choices[key];
        answersList.appendchild(createLi(radioBtnName,choiceText));

    }
}


// function setNextQuestion() {
//     showQuestion(allQuestions)
// }
// function showQuestion(question) {
//     question.innertext = question.question
//     // question.answers.for(answer => {
//     //     const button = document.createElement("button")
//     //     button.innerText = answer.text
//     //     button.classList.add("button")
//     //     if (answer.correct) {
//     //         button.dataset.correct = answer.correct
//     //     }
//     //     button.addEventListener('click',userChoice)
//     //     answers.appendChild(button)
//     // });
// }



// format answer: {text: "___" correct: "___"}
var allQuestions = [
    {
    question: "The condition in an if / else statement is enclosed within_.",
    answers: [
        { text: "Quotes", correct: "false"},
        { text: "Curly Brackets", correct: "true"},
        { text: "Parentheses", correct: "false"},
        { text: "Square Brackets", correct: "false"}
    ]
    },
    {
    question: "Arrays in Javascript can be used to store_.",
    answers: [
        { text: "Numbers and Strings", correct: "false"},
        { text: "Other Arrays", correct: "false"},
        { text: "Booleans", correct: "false"},
        { text: "All of the Above", correct: "true"}
    ]
    },
    {  
    question: "Commonly used data types do not include",
    answers: [
        { text: "Strings", correct:"false"},
        { text: "Booleans", correct:"false"},
        { text: "Alerts", correct:"true"},
        { text: "Numbers", correct:"false"}
    ]
    },
    {
    question: "String values must be enclosed within __ when being assigned to variables.",
    answers: [
        { text: "Commas", correct:"true"},
        { text: "Curly Brackets", correct:"false"},
        { text: "Quotes", correct:"false"},
        { text: "Parentheses", correct:"false"}
    ]
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
        { text: "Javascript", correct:"true"},
        { text: "Terminal/bash", correct:"false"},
        { text: "For Loops", correct:"false"},
        { text: "Console log", correct:"false"}
    ]
    }
];
// click event for next button to switch to next question after answer

// if question right or wrong 

