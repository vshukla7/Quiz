//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array
  const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented the Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "NaCl", "HCl"],
    correct: "H2O",
  },
  {
    id: "4",
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
    correct: "Carbon Dioxide",
  },
  {
    id: "5",
    question: "Which scientist proposed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    correct: "Albert Einstein",
  },
  {
    id: "6",
    question: "What is the unit of measurement for electric current?",
    options: ["Volt", "Watt", "Ohm", "Ampere"],
    correct: "Ampere",
  },
  {
    id: "7",
    question: "What is the process of conversion of water vapor into liquid water called?",
    options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
    correct: "Condensation",
  },
  {
    id: "8",
    question: "Which metal is liquid at room temperature?",
    options: ["Gold", "Silver", "Iron", "Mercury"],
    correct: "Mercury",
  },
  {
    id: "9",
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt", "Volt"],
    correct: "Newton",
  },
  // Add more questions here...
  {
    id: "10",
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correct: "Au",
  },
  {
    id: "11",
    question: "What is the formula for the area of a rectangle?",
    options: ["l × w", "2(l + w)", "l + w", "l/w"],
    correct: "l × w",
  },
  {
    id: "12",
    question: "Which of the following is a non-metal?",
    options: ["Sodium", "Aluminium", "Silver", "Sulfur"],
    correct: "Sulfur",
  },
  {
    id: "13",
    question: "What is the main function of the kidneys?",
    options: ["Digestion", "Respiration", "Excretion", "Circulation"],
    correct: "Excretion",
  },
  {
    id: "14",
    question: "What is the chemical formula of methane?",
    options: ["CH4", "CO2", "H2O", "NH3"],
    correct: "CH4",
  },
  {
    id: "15",
    question: "What is the process by which plants make their own food called?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
    correct: "Photosynthesis",
  },
  {
    id: "16",
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Mass", "Velocity"],
    correct: "Velocity",
  },
  {
    id: "17",
    question: "Which type of lens is used to correct hyperopia?",
    options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
    correct: "Convex lens",
  },
  {
    id: "18",
    question: "What is the process of conversion of water vapor into liquid water called?",
    options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
    correct: "Condensation",
  },
  {
    id: "19",
    question: "What is the chemical formula of table salt?",
    options: ["NaCl", "KCl", "HCl", "NH3"],
    correct: "NaCl",
  },
  // Add more questions...
  // Continue adding questions until you have 80
];



//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};