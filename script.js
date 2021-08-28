const startButton = document.getElementbyId("start-button")
const allQuestionsContainer = document.getElementById("allQuestions")

startButton.addEventListener("click", Start)

// console.log("start")
function Start() {
    startButton.classList.add("hide")
    allQuestionsContainer.classList.remove("hide")
    currentQuestionIndex = 0
    setNextQuestion()
}
function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}
function showQuestion(question) {
    questionElement.innertext = question.question
    question.answer.forEach(element => {
        const button = document.createElement("type", "radio");
        button.innerText = answer.text
        button.classList.add("button")
        
    });
}



// format answer: {text: "___" correct: "___"}
var allQuestions = [
    {
    question: "The condition is an if / else statement is enclosed within_.",
    answers: [
        { text: "Quotes"},
        { text: "Curly Brackets"},
        { text: "Parentheses"},
        { text: "Square Brackets"}
    ]
    },
    {
    question: "Arrays in Javascript can be used to store_.",
    answers: [
        { text: "Numbers and Strings"},
        { text: "Other Arrays"},
        { text: "Booleans"},
        { text: "All of the Above"}
    ]
    },
    {  
    question: "Commonly used data types do not include",
    answers: [
        { text: "Strings"},
        { text: "Booleans"},
        { text: "Alerts"},
        { text: "Numbers"}
    ]
    },
    {
    question: "String values must be enclosed within __ when being assigned to variables.",
    answers: [
        { text: "Commas"},
        { text: "Curly Brackets"},
        { text: "Quotes"},
        { text: "Parentheses"}
    ]
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: [
        { text: "Javascript"},
        { text: "Terminal/bash"},
        { text: "For Loops"},
        { text: "Console log"}
    ]
    }
];
// click event for next button to switch to next question after answer
nextButton
// if question right or wrong 

