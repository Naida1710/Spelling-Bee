document.addEventListener("DOMContentLoaded", () => {
    const difficultyButtons = document.querySelectorAll(".difficulty-btn"); 

    const difficultySelection = document.getElementById("difficulty-selection");
    const startQuizSection = document.getElementById("start-quiz"); 

    const startQuizButton = document.getElementById("startQuiz"); 
    const quizOptionsContainer = document.getElementById("quiz-options");
    const submitButton = document.getElementById("submitAnswer"); 

const quizArea = document.querySelector(".quiz-area"); 
const homeButton = document.getElementById("homeButton"); 
const popup = document.getElementById("popup"); 

const popupMessage = document.getElementById("popup-message"); 
const nextQuestionButton = document.getElementById("nextButton"); 
const timerElement = document.getElementById("timer");
const fiftyFiftyButton = document.getElementById("fiftyFiftyButton"); 
const errorPopup = document.getElementById("error-popup"); 

const instructionOverlay = document.getElementById("instructionOverlay");  
const startQuizNow = document.getElementById("startQuizNow"); 

const certificatePopup = document.getElementById("certificate-popup"); 
const certificateMessage = document.getElementById("certificate-message"); 

const clickSound = new Audio("assets/audio/click-234708.mp3");   
  });
  const questions = { 

    easy: [ 
    
    { question: "Choose the correct spelling:", answers: ["bananna", "banana", "baanana", "banan"], correct: "banana"}, 
    
    { question: "Choose the correct spelling:", answers: ["definately", "definitely", "definatelye", "definitly"], correct: "definitely" }, 
    
    { question: "Choose the correct spelling:", answers: ["realy", "really", "reely", "realyy"], correct: "really" }, 
    
    { question: "Choose the correct spelling:", answers: ["applle", "apple", "aple", "appl"], correct: "apple" }, 
    
    { question: "Choose the correct spelling:", answers: ["freind", "frend", "friend", "frendi"], correct: "friend"}, 
    
    { question: "Choose the correct spelling:", answers: ["dog", "dowg", "doog", "dogg"], correct: "dog" }, 
    
    { question: "Choose the correct spelling:", answers: ["kat", "catt", "cat", "caat"], correct: "cat" }, 
    
    { question: "Choose the correct spelling:", answers: ["hous", "howse", "huose", "house"], correct: "house" }, 
    
    { question: "Choose the correct spelling:", answers: ["hapi", "hapyy", "happy", "hapy"], correct: "happy"}, 
    
    { question: "Choose the correct spelling:", answers: ["school", "scoll", "shoool", "skool"], correct: "school"} 
    
    ], 
    
    medium: [ 
    
    { question: "Choose the correct spelling:", answers: ["strawberry", "strawbarry", "stravberri", "strawberi"], correct: "strawberry"}, 
    
    { question: "Choose the correct spelling:", answers: ["milion", "million", "miliun", "milioon"], correct: "million"}, 
    
    { question: "Choose the correct spelling:", answers: ["butiful", "beutiful", "beautiful", "beutiful"], correct: "beautiful" }, 
    
    { question: "Choose the correct spelling:", answers: ["Febraury", "February", "Februery", "Februry"], correct: "February"}, 
    
    { question: "Choose the correct spelling:", answers: ["enviroment", "envirenment", "enviorment", "environment"], correct: "environment"}, 
    
    { question: "Choose the correct spelling:", answers: ["libary", "liberry", "librery", "library"], correct: "library" }, 
    
    { question: "Choose the correct spelling:", answers: ["buisness", "business", "busyness", "busynes"], correct: "business" }, 
    
    { question: "Choose the correct spelling:", answers: ["horse", "hors", "horz", "hoars"], correct: "horse"}, 
    
    { question: "Choose the correct spelling:", answers: ["cloaud", "cloude", "cloud", "kloude"], correct: "cloud"}, 
    
    { question: "Choose the correct spelling:", answers: ["shallow", "schalow", "shalow", "shalov"], correct: "shallow"} 
    
    ], 
    
    hard: [ 
    
    { question: "Choose the correct spelling:", answers: ["accomodate", "accommodate", "acommodate", "accomadate"], correct: "accommodate" }, 
    
    { question: "Choose the correct spelling:", answers: ["seperate", "separrate", "separate", "seperrate"], correct: "separate" }, 
    
    { question: "Choose the correct spelling:", answers: ["commitee", "committe", "committee", "comittee"], correct: "committee" }, 
    
    { question: "Choose the correct spelling:", answers: ["occured", "occurred", "occureded", "ocurred"], correct: "occurred" }, 
    
    { question: "Choose the correct spelling:", answers: ["begining", "begininng", "beggining", "beginning"], correct: "beginning" }, 
    
    { question: "Choose the correct spelling:", answers: ["embarass", "embarras", "embarrass", "embaras"], correct: "embarrass" }, 
    
    { question: "Choose the correct spelling:", answers: ["neccessary", "necessary", "necesary", "necessery"], correct: "necessary" }, 
    
    { question: "Choose the correct spelling:", answers: ["priviledge", "privelege", "privilege", "privilage"], correct: "privilege" }, 
    
    { question: "Choose the correct spelling:", answers: ["existense", "existence", "existance", "exzistence"], correct: "existence" }, 
    
    { question: "Choose the correct spelling:", answers: ["recieve", "receive", "receeve", "receve"], correct: "receive" } 
    
    ] 
    
    // Medium and Hard questions follow a similar pattern... 
    
    }; 
    
    difficultyButtons.forEach(button => { 

        button.addEventListener("click", () => { 
            clickSound.currentTime = 0; 

            clickSound.play(); 
     
        currentLevel = button.dataset.level; 
        resetQuiz(); 

resetLevel(); 

difficultySelection.style.display = "none"; 

quizArea.style.display = "block"; 

instructionOverlay.style.display = "flex"; 
    }); 

}); 
startQuizNow.addEventListener("click", () => { 

    clickSound.currentTime = 0; 
    
    clickSound.play(); 
    
     
    
    instructionOverlay.style.display = "none"; 
    
    loadQuestion(); 
    
    }); 
    
     
    
    startQuizButton.addEventListener("click", () => { 
    
    clickSound.currentTime = 0; 
    
    clickSound.play(); 
    
     
    
    startQuizSection.style.display = "none"; 
    
    difficultySelection.style.display = "block"; 
    
    }); 
    homeButton.addEventListener("click", () => { 

        clickSound.currentTime = 0; 
        
        clickSound.play(); 
        
        resetQuiz(); 
        
        resetLevel(); 
        startQuizSection.style.display = "block"; 

difficultySelection.style.display = "none"; 

quizArea.style.display = "none"; 

popup.style.display = "none"; 

errorPopup.style.display = "none"; 

// Clear any selected answers or quiz text 

quizOptionsContainer.innerHTML = ""; 

document.getElementById("quiz-question-text").textContent = ""; 

document.getElementById("question-number").textContent = "0"; 

document.getElementById("score").textContent = "0"; 

}); 
function formatTime(seconds) { 

    const mins = Math.floor(seconds / 60).toString().padStart(2, '0'); 
    
    const secs = (seconds % 60).toString().padStart(2, '0'); 
    
    return `${mins}:${secs}`; 
    
     
    
    } 
     

function startTimer() { 

    clearInterval(timer); 
    
    timer = setInterval(() => { 
    
    countdownTime--; 
    
    timerElement.textContent = formatTime(countdownTime); 
    
    if (countdownTime <= 0) { 
    
    clearInterval(timer); 
    
    highlightCorrectAndWrongAnswers(); 
    
    showGameOverPopup(); 
    
    } 
    
    }, 1000); 
    
    } 

    function showAnswerPopup(isCorrect) { 

        clearInterval(timer); //  
        
        const currentQuestion = questions[currentLevel][currentQuestionIndex]; 
        
        const correctAnswer = currentQuestion.correct; 
        
        const answerButtons = document.querySelectorAll(".quiz-box"); 
        
        answerButtons.forEach(button => { 
        
        button.disabled = true; 
        
        if (button.innerText === correctAnswer) { 
        
        button.style.backgroundColor = "#4CAF50"; // Green 
        
        button.style.color = "white"; 
        
        } 
    });
        // Only mark the selected wrong answer red 

if (!isCorrect && selectedAnswerButton) { 

    selectedAnswerButton.style.backgroundColor = "#f44336"; // Red 
    
    selectedAnswerButton.style.color = "white"; 
    
    } 
    
    popupMessage.textContent = isCorrect 
    
    ? "Correct!" 
    
    : "Wrong!"; 
    
    popup.style.display = "block"; 
} 

 

function highlightCorrectAndWrongAnswers() { 

    const currentQuestion = questions[currentLevel][currentQuestionIndex]; 
    
    const correctAnswer = currentQuestion.correct; 
    
    // Loop through all the answer buttons and highlight them 
    
    document.querySelectorAll(".quiz-box").forEach(button => { 
    
    button.disabled = true; // Disable all answer buttons 
    
    if (button.innerText === correctAnswer) { 
    
    // Correct answer: Green background 
    
    button.style.backgroundColor = "#4CAF50"; // Green 
    
    button.style.color = "white"; // White text 
    
    } else { 
    
    // Incorrect answer: Red background 
    
    button.style.backgroundColor = "#f44336"; // Red 
    
    button.style.color = "white"; // White text 
    
    } 
    
    }); 
    
    } 


     

fiftyFiftyButton.addEventListener("click", () => { 

    clickSound.currentTime = 0; 
    
    clickSound.play(); 
    
     
    
    if (!usedFiftyFiftyForLevel) { 
    
    usedFiftyFiftyForLevel = true; 
    
    fiftyFiftyButton.disabled = true; // Disable the 50/50 button after use 
    
    fiftyFiftyButton.textContent = "Used"; // Change text to 'Used' 
    
    // Get the current question and the correct answer 
    
    const currentQuestion = questions[currentLevel][currentQuestionIndex]; 
    
    const correctAnswer = currentQuestion.correct; 
    
    // Get the incorrect answers by filtering out the correct one 
    
    const incorrectAnswers = currentQuestion.answers.filter(answer => answer !== correctAnswer); 
    
    // Randomly pick two incorrect answers to hide 
    
    const [incorrect1, incorrect2] = getRandomIncorrectAnswers(incorrectAnswers); 
    
    // Hide the two incorrect answers by setting their visibility to 'hidden' and disabling them 
    
    document.querySelectorAll(".quiz-box").forEach(button => { 
    
    if (button.innerText === incorrect1 || button.innerText === incorrect2) { 
    
    button.style.visibility = "hidden"; 
    
    button.disabled = true; // Disable the button so users cannot click it 
    
    } 
    
    }); 
    
    } 
    
    }); 
        
       
        

