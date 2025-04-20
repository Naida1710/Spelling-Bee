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