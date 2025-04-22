// Event listeners for the quiz game
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
  const overlayy = document.querySelector(".overlayy");
 


  // Set initial game values
  let currentQuestionIndex = 0;
  let currentLevel = "easy";
  let score = 0;
  let countdownTime = 30;
  let timer;
  let usedFiftyFiftyForLevel = false;
  let selectedAnswerButton = null;
  

  // List of spelling quiz questions organized by difficulty level
  const questions = {
    easy: [
      {
        question: "Choose the correct spelling:",
        answers: ["bananna", "banana", "baanana", "banan"],
        correct: "banana",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["definately", "definitely", "definatelye", "definitly"],
        correct: "definitely",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["realy", "really", "reely", "realyy"],
        correct: "really",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["applle", "apple", "aple", "appl"],
        correct: "apple",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["freind", "frend", "friend", "frendi"],
        correct: "friend",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["dog", "dowg", "doog", "dogg"],
        correct: "dog",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["kat", "catt", "cat", "caat"],
        correct: "cat",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["hous", "howse", "huose", "house"],
        correct: "house",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["hapi", "hapyy", "happy", "hapy"],
        correct: "happy",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["school", "scoll", "shoool", "skool"],
        correct: "school",
      },
    ],
    medium: [
      {
        question: "Choose the correct spelling:",
        answers: ["strawberry", "strawbarry", "stravberri", "strawberi"],
        correct: "strawberry",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["milion", "million", "miliun", "milioon"],
        correct: "million",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["butiful", "beutiful", "beautiful", "beutiful"],
        correct: "beautiful",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["Febraury", "February", "Februery", "Februry"],
        correct: "February",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["enviroment", "envirenment", "enviorment", "environment"],
        correct: "environment",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["libary", "liberry", "librery", "library"],
        correct: "library",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["buisness", "business", "busyness", "busynes"],
        correct: "business",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["horse", "hors", "horz", "hoars"],
        correct: "horse",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["cloaud", "cloude", "cloud", "kloude"],
        correct: "cloud",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["shallow", "schalow", "shalow", "shalov"],
        correct: "shallow",
      },
    ],
    hard: [
      {
        question: "Choose the correct spelling:",
        answers: ["accomodate", "accommodate", "acommodate", "accomadate"],
        correct: "accommodate",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["seperate", "separrate", "separate", "seperrate"],
        correct: "separate",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["commitee", "committe", "committee", "comittee"],
        correct: "committee",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["occured", "occurred", "occureded", "ocurred"],
        correct: "occurred",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["begining", "begininng", "beggining", "beginning"],
        correct: "beginning",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["embarass", "embarras", "embarrass", "embaras"],
        correct: "embarrass",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["neccessary", "necessary", "necesary", "necessery"],
        correct: "necessary",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["priviledge", "privelege", "privilege", "privilage"],
        correct: "privilege",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["existense", "existence", "existance", "exzistence"],
        correct: "existence",
      },
      {
        question: "Choose the correct spelling:",
        answers: ["recieve", "receive", "receeve", "receve"],
        correct: "receive",
      },
    ],
  };

  // Show the start quiz section and hide all other sections and popups
  startQuizSection.style.display = "block";
  quizArea.style.display = "none";
  popup.style.display = "none";
  errorPopup.style.display = "none";
  difficultySelection.style.display = "none";
  instructionOverlay.style.display = "none";

  // Add click event to each difficulty button
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
      currentLevel = button.dataset.level;
      resetQuiz();
      resetLevel();
      difficultySelection.style.display = "none";
      quizArea.style.display = "block";
      instructionOverlay.style.display = "flex";
      loadQuestion();
    });
  });

  // Start quiz button: play sound and show difficulty selection
  startQuizButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission
      clickSound.currentTime = 0;
      clickSound.play();
      startQuizSection.style.display = "none";
      difficultySelection.style.display = "block";
  });

  // Start Quiz Now button click, sound, hidden instruction overlay
  startQuizNow.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    instructionOverlay.style.display = "none";
    loadQuestion();
  });

  // Home button: sound, reset quiz and level and return to start screen
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

  // Format seconds into a MM:SS time format
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;

  }

  // Start a countdown timer, updates the timer display every second,
  // and triggers game over when the time reaches 0
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

  // Stop the timer, gets the current question and correct answer,
  // and select all answer buttons to disable and highlight them later
  function showAnswerPopup(isCorrect) {
    clearInterval(timer); // Stop the timer when an answer is selected
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;
    const answerButtons = document.querySelectorAll(".quiz-box");
    submitButton.disabled = true;
    // Reset styles for all answer buttons before highlighting correct/incorrect ones
    answerButtons.forEach((button) => {
      button.style.backgroundColor = ""; // Reset background color
      button.style.color = ""; // Reset text color
      button.disabled = true; // Disable all buttons after an answer is selected
    });
  
    // Highlight the correct answer in green
    answerButtons.forEach((button) => {
      if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "#4CAF50"; // Green for correct
        button.style.color = "white";
      }
    });
  
    // If the selected answer is incorrect, highlight it in red
    if (!isCorrect && selectedAnswerButton) {
      selectedAnswerButton.style.backgroundColor = "#f44336"; // Red for incorrect
      selectedAnswerButton.style.color = "white";
    }
  
    // Show popup with the result message
    popupMessage.textContent = isCorrect ? "Correct!" : "Wrong!";
    popup.style.display = "block";
   
  }
 
  

  // Highlights the correct and incorrect answers after the user selects an answer
function highlightCorrectAndWrongAnswers() {
  const currentQuestion = questions[currentLevel][currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;
  const answerButtons = document.querySelectorAll(".quiz-box");

  // Log the correct answer for debugging
  console.log("Correct Answer: ", correctAnswer);

  // Reset all buttons' styles and disable them
  answerButtons.forEach((button) => {
    button.disabled = true; // Disable all buttons after selection
    button.style.backgroundColor = ""; // Reset background color
    button.style.color = ""; // Reset text color
  });

  // Loop through all the answer buttons
  answerButtons.forEach((button) => {
    console.log("Button Text: ", button.innerText); // Debugging to see the button text

    // Check if the button text matches the correct answer
    if (button.innerText.trim() === correctAnswer.trim()) {
      console.log("Correct Answer Button Found!");
      button.style.backgroundColor = "#4CAF50"; // Green for correct
      button.style.color = "white";
    }
  });

  // If the user selected an incorrect answer, highlight it in red
  if (selectedAnswerButton && selectedAnswerButton.innerText.trim() !== correctAnswer.trim()) {
    console.log("Incorrect Answer Selected!");
    selectedAnswerButton.style.backgroundColor = "#f44336"; // Red for incorrect
    selectedAnswerButton.style.color = "white";
  }
}

  // Handle the 50/50 lifeline functionality
  fiftyFiftyButton.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    if (!usedFiftyFiftyForLevel) {
      usedFiftyFiftyForLevel = true;
      fiftyFiftyButton.disabled = true;
      fiftyFiftyButton.textContent = "Used";

      // Get the current question and the correct answer
      const currentQuestion = questions[currentLevel][currentQuestionIndex];
      const correctAnswer = currentQuestion.correct;
      // Get the incorrect answers by filtering out the correct one
      const incorrectAnswers = currentQuestion.answers.filter(
        (answer) => answer !== correctAnswer
      );
      // Randomly pick two incorrect answers to hide
      const [incorrect1, incorrect2] =
        getRandomIncorrectAnswers(incorrectAnswers);

        document.querySelectorAll(".quiz-box").forEach((button) => {
          const buttonText = button.innerText.trim().toLowerCase();
          const incorrect1Trimmed = incorrect1.trim().toLowerCase();
          const incorrect2Trimmed = incorrect2.trim().toLowerCase();
        
          if (
            buttonText === incorrect1Trimmed ||
            buttonText === incorrect2Trimmed
          ) {
            button.style.visibility = "hidden";
            button.disabled = true;
          }
        });
    }
  });

  // Helper function to randomly select two incorrect answers
  function getRandomIncorrectAnswers(incorrectAnswers) {
    // Randomly pick two answers
    const randomIndex1 = Math.floor(Math.random() * incorrectAnswers.length);
    let randomIndex2 = Math.floor(Math.random() * incorrectAnswers.length);

    // Ensure the two incorrect answers are not the same
    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * incorrectAnswers.length);
    }

    return [incorrectAnswers[randomIndex1], incorrectAnswers[randomIndex2]];
  }

  // Reset the quiz state, including score, question index, timer, and 50/50 lifeline usage
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = score;
    clearInterval(timer);
    countdownTime = 30;
    timerElement.textContent = formatTime(countdownTime);
    usedFiftyFiftyForLevel = false;
    resetFiftyFiftyButton();
    selectedAnswerButton = null;
  
    // Reset button styles before shuffling questions
    const answerButtons = document.querySelectorAll(".quiz-box");
    answerButtons.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.disabled = false;  // Re-enable buttons
    });
  
  }
   


  // Reset the level-specific state, including 50/50 lifeline usage and button stat
  function resetLevel() {
    usedFiftyFiftyForLevel = false;
    resetFiftyFiftyButton();
  }

  // Reset the 50/50 button state based on whether the lifeline has been used for the current level
  function resetFiftyFiftyButton() {
    fiftyFiftyButton.disabled = usedFiftyFiftyForLevel;
    fiftyFiftyButton.textContent = usedFiftyFiftyForLevel ? "Used" : "50/50";
  }

  // Enable the 50/50 button if the lifeline hasn't been used for the current level
  function enableFiftyFiftyButton() {
    if (!usedFiftyFiftyForLevel) {
      fiftyFiftyButton.disabled = false;
    }
  }

  // Loads the current question and its answer choices into the quiz interface
  function loadQuestion() {
    console.log("Loading question...");
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
  
    quizOptionsContainer.innerHTML = ""; // Clear previous answers
    document.getElementById("quiz-question-text").textContent = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("quiz-box");
      button.innerText = answer;
  
      button.addEventListener("click", () => {
        document.querySelectorAll(".quiz-box").forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedAnswerButton = button;
      });
  
      quizOptionsContainer.appendChild(button);
    });
  
    document.getElementById("question-number").textContent = currentQuestionIndex + 1;
    selectedAnswerButton = null;
    enableFiftyFiftyButton();
    errorPopup.style.display = "none";
    popup.style.display = "none";
    countdownTime = 30;
    timerElement.textContent = formatTime(countdownTime);
    startTimer();
  }
  

  // Handle the submission of an answer when the "submit" button is clicked
  submitButton.addEventListener("click", () => {
    submitButton.disabled = true;
    // Ensure the selected answer button exists before proceeding
    const selectedAnswerButton = document.querySelector(".quiz-box.selected");
  
    // Check if no answer is selected
    if (!selectedAnswerButton) {
      showErrorPopup();  // Show error if no answer is selected
    } else {
      // Stop the timer once an answer is selected
      clearInterval(timer);
  
      // Get the current question and correct answer
      const currentQuestion = questions[currentLevel][currentQuestionIndex];
      const correctAnswer = currentQuestion.correct;
  
      // Compare the selected answer to the correct one
      if (selectedAnswerButton.innerText === correctAnswer) {
        score++;  // Increment score for correct answer
        document.getElementById("score").textContent = score;
        showAnswerPopup(true);  // Show correct answer popup
      } else {
        showAnswerPopup(false);  // Show wrong answer popup
      }
  
      // Show the next question or results
      nextQuestionButton.style.display = "block";
  
      if (currentQuestionIndex === questions[currentLevel].length - 1) {
        nextQuestionButton.textContent = "Results";  // On last question, show "Results"
      } else {
        nextQuestionButton.textContent = "Next";  // Otherwise, show "Next"
      }
    }
  });
  

  // Display an error popup if no answer is selected
  function showErrorPopup() {
    errorPopup.innerText = "Please select an answer first.";
    errorPopup.style.display = "block";
    setTimeout(() => {
      errorPopup.style.display = "none";
    }, 600);
  }

  // Handle the "Next" button click to load the next question or show the results
  nextQuestionButton.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    popup.style.display = "none";
    submitButton.disabled = false;  // Re-enable the submit button
    


    currentQuestionIndex++;

    if (currentQuestionIndex < questions[currentLevel].length) {
      loadQuestion();
    } else {
      showCertificate(score);
    }
  });

  // Display the "Time's up!" popup and highlights the correct and incorrect answers
  function showGameOverPopup() {
    setTimeout(() => {
      const currentQuestion = questions[currentLevel][currentQuestionIndex];
      const correctAnswer = currentQuestion.correct;

      // Highlight the correct answer and wrong answers
      document.querySelectorAll(".quiz-box").forEach((button) => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
          button.style.backgroundColor = "#4CAF50";
          button.style.color = "white";
        } else {
          button.style.backgroundColor = "#f44336";
          button.style.color = "white";
        }
      });
      popupMessage.textContent = "Time's up!";
      popup.style.display = "block";
      nextQuestionButton.textContent = "Next";
      nextQuestionButton.style.display = "block";
    }, 500);
  }

  // Show the certificate pop-up with the player's score
  function showCertificate(score) {
    clearInterval(timer);
    certificatePopup.classList.add("show");
    overlayy.style.display = "block";
    certificateMessage.innerHTML = `<p>You've scored ${score} out of ${questions[currentLevel].length}.</p><p>Total points: ${score}</p>`;

  }

  // Close the certificate pop-up when the close button is clicked
  document.getElementById("play-again-btn").addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    resetQuiz();
    resetLevel();
    certificatePopup.classList.remove("show");
    overlayy.style.display = "none";
    startQuizSection.style.display = "block";
    difficultySelection.style.display = "none";
    quizArea.style.display = "none";

    // Reset the progress table (question count, score, and timer)
    document.getElementById("question-number").textContent = "0";
    document.getElementById("score").textContent = "0";
    timerElement.textContent = formatTime(countdownTime);
  });

  // Display the answer popup and highlights correct and incorrect answers
  function showAnswerPopup(isCorrect) {
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;
    const answerButtons = document.querySelectorAll(".quiz-box");
    answerButtons.forEach((button) => {
      button.disabled = true;
      if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "white";
      }
    });

    if (!isCorrect &&  selectedAnswerButton) {
      selectedAnswerButton.style.backgroundColor = "#f44336";
      selectedAnswerButton.style.color = "white";
    }


    // ✅ Play sound effect
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    if (isCorrect) {
      correctSound.play();
      popupMessage.textContent = "Correct!";
    } else {
      wrongSound.play();
      popupMessage.textContent = "Wrong!";
    }
    popup.style.display = "block";
  }
});
