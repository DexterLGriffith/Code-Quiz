const startButton = document.querySelector("#start-button");
const Question = document.querySelector("#Questions");
const choice = document.querySelector("#questionTitle");
const answers = Array.from(document.querySelectorAll("questionOptions"));
startButton.addEventListener("click", Start)



function Start() {
    startButton.classList.add("hide")   
}
    
let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []
let questionCounter = 0
let score = 0

// format answer:  question:
                // choice(x): 
                // answer(x):
let Questions = [
    {
    question: "The condition in an if / else statement is enclosed within_.",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parentheses",
    choice4: "Square Brackets",
    answer: 2,
    },
    {
    question: "Arrays in Javascript can be used to store_.",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the Above",
    answer: 4,
    },
    {  
    question: "Commonly used data types do not include",
    choice1: "Strings",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: 3,
    },
    {
    question: "String values must be enclosed within __ when being assigned to variables.",
    
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parentheses",
    answer: 1,
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choice1: "Javascript",
    choice2: "Terminal/bash",
    choice3: "For Loops",
    choice4: "Console log",
    answer: 1,
    }
];
const totalQuestion = 5
Start = () => {
    questionCounter = 0
    availableQuestions = [...Questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > totalQuestion) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }
    questionCounter++
    currentQuestion = availableQuestions[Questions]
    question.innerText = curentQuestion.question

    choices.forEach(choice => {
        const choiceNumber = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number] 
    })

} 

// click event for next button to switch to next question after answer

// if question right or wrong 
