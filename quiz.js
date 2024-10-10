const questions = [
    // Easy Questions
    {
        question: "What is the basic unit of length in the metric system?",
        options: ["Kilometer", "Meter", "Centimeter", "Millimeter"],
        answer: "Meter"
    },
    {
        question: "What is the formula for calculating speed?",
        options: ["Speed = Distance / Time", "Speed = Time / Distance", "Speed = Force / Mass", "Speed = Mass / Time"],
        answer: "Speed = Distance / Time"
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.81 m/s²", "10 m/s²", "9.8 m/s²", "8.9 m/s²"],
        answer: "9.81 m/s²"
    },
    {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Force", "Mass"],
        answer: "Force"
    },
    {
        question: "What does the slope of a distance-time graph represent?",
        options: ["Speed", "Acceleration", "Force", "Momentum"],
        answer: "Speed"
    },
    
    // Medium Questions
    {
        question: "What is Newton's second law of motion?",
        options: [
            "An object at rest stays at rest.",
            "F = m * a",
            "For every action, there is an equal and opposite reaction.",
            "The force of gravity is proportional to mass."
        ],
        answer: "F = m * a"
    },
    {
        question: "What is kinetic energy?",
        options: [
            "Energy of an object at rest.",
            "Energy of a moving object.",
            "Energy stored in a compressed spring.",
            "Energy due to gravity."
        ],
        answer: "Energy of a moving object."
    },
    {
        question: "What is potential energy?",
        options: [
            "Energy of motion.",
            "Energy stored due to position.",
            "Energy transferred through heat.",
            "Energy of light."
        ],
        answer: "Energy stored due to position."
    },
    {
        question: "What is the formula for gravitational potential energy?",
        options: [
            "PE = m * g * h",
            "PE = m * v * t",
            "PE = m * a * d",
            "PE = F * d"
        ],
        answer: "PE = m * g * h"
    },
    {
        question: "What is the principle of conservation of energy?",
        options: [
            "Energy cannot be created or destroyed.",
            "Energy can be created from nothing.",
            "Energy is lost in every transformation.",
            "Energy can only be transformed into heat."
        ],
        answer: "Energy cannot be created or destroyed."
    },
    
    // Hard Questions
    {
        question: "What is the unit of force in the SI system?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: "Newton"
    },
    {
        question: "What is the relationship between mass and weight?",
        options: [
            "Weight = Mass × Acceleration due to gravity",
            "Weight = Mass / Acceleration due to gravity",
            "Weight = Mass × Speed",
            "Weight = Mass × Distance"
        ],
        answer: "Weight = Mass × Acceleration due to gravity"
    },
    {
        question: "What is the formula for calculating work?",
        options: [
            "Work = Force × Distance",
            "Work = Force / Distance",
            "Work = Mass × Acceleration",
            "Work = Energy × Time"
        ],
        answer: "Work = Force × Distance"
    },
    {
        question: "What is the unit of energy in the SI system?",
        options: ["Watt", "Joule", "Newton", "Pascal"],
        answer: "Joule"
    },
    {
        question: "What does the law of conservation of momentum state?",
        options: [
            "Momentum can be created.",
            "Momentum of a system remains constant if no external forces act on it.",
            "Momentum is always increasing.",
            "Momentum can be lost."
        ],
        answer: "Momentum of a system remains constant if no external forces act on it."
    },

    // Additional Questions for Variety
    {
        question: "What is the formula for density?",
        options: ["Density = Mass / Volume", "Density = Volume / Mass", "Density = Mass × Volume", "Density = Mass + Volume"],
        answer: "Density = Mass / Volume"
    },
    {
        question: "What is an example of a non-contact force?",
        options: ["Friction", "Tension", "Magnetic force", "Applied force"],
        answer: "Magnetic force"
    },
    {
        question: "What is the effect of air resistance on falling objects?",
        options: [
            "It increases their speed.",
            "It decreases their speed.",
            "It has no effect.",
            "It causes them to float."
        ],
        answer: "It decreases their speed."
    },
    {
        question: "What is the relationship between frequency and wavelength in a wave?",
        options: [
            "They are directly proportional.",
            "They are inversely proportional.",
            "They are equal.",
            "They are unrelated."
        ],
        answer: "They are inversely proportional."
    },
    {
        question: "What is the acceleration of an object in free fall (ignoring air resistance)?",
        options: [
            "0 m/s²",
            "9.81 m/s²",
            "1 m/s²",
            "10 m/s²"
        ],
        answer: "9.81 m/s²"
    },

    {
        question: "What does the term 'scalar quantity' mean?",
        options: [
            "A quantity that has only magnitude.",
            "A quantity that has both magnitude and direction.",
            "A quantity that can only be positive.",
            "A quantity that can be measured only in one dimension."
        ],
        answer: "A quantity that has only magnitude."
    },
    {
        question: "Which of the following is an example of a vector quantity?",
        options: [
            "Speed",
            "Distance",
            "Velocity",
            "Mass"
        ],
        answer: "Velocity"
    },
    {
        question: "What is the relationship between mass and acceleration in Newton's second law?",
        options: [
            "Mass and acceleration are directly proportional.",
            "Mass and acceleration are inversely proportional.",
            "Mass does not affect acceleration.",
            "Acceleration can be constant regardless of mass."
        ],
        answer: "Mass and acceleration are inversely proportional."
    },
    {
        question: "What happens to the potential energy of an object when it is lifted higher?",
        options: [
            "It decreases.",
            "It increases.",
            "It remains the same.",
            "It becomes kinetic energy."
        ],
        answer: "It increases."
    },

    {
        question: "What is the speed of sound in air at room temperature?",
        options: [
            "340 m/s",
            "300 m/s",
            "400 m/s",
            "350 m/s"
        ],
        answer: "340 m/s"
    },
    {
        question: "What is the unit of pressure?",
        options: [
            "Pascal",
            "Joule",
            "Newton",
            "Watt"
        ],
        answer: "Pascal"
    },
    {
        question: "What is the definition of impulse?",
        options: [
            "Change in momentum.",
            "Change in energy.",
            "Force multiplied by time.",
            "Both A and C."
        ],
        answer: "Both A and C."
    },
    {
        question: "What type of energy does a stretched spring have?",
        options: [
            "Kinetic energy",
            "Potential energy",
            "Thermal energy",
            "Chemical energy"
        ],
        answer: "Potential energy"
    },
    {
        question: "What happens to an object’s velocity if a constant force acts on it?",
        options: [
            "It remains constant.",
            "It increases.",
            "It decreases.",
            "It becomes zero."
        ],
        answer: "It increases."
    },

    {
        question: "What is the term for the rate of change of velocity?",
        options: [
            "Speed",
            "Acceleration",
            "Force",
            "Momentum"
        ],
        answer: "Acceleration"
    },
    {
        question: "In a vacuum, which object will fall faster?",
        options: [
            "A feather",
            "A hammer",
            "Both will fall at the same rate.",
            "Neither will fall."
        ],
        answer: "Both will fall at the same rate."
    },
    {
        question: "What is the relationship between mass and inertia?",
        options: [
            "Mass is directly proportional to inertia.",
            "Mass is inversely proportional to inertia.",
            "Inertia does not depend on mass.",
            "Inertia is independent of mass."
        ],
        answer: "Mass is directly proportional to inertia."
    },
    {
        question: "What is the formula for calculating power?",
        options: [
            "Power = Work / Time",
            "Power = Work × Time",
            "Power = Force / Distance",
            "Power = Energy / Time"
        ],
        answer: "Power = Work / Time"
    }
];




// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 1;
const questionsPerLevel = 20; // Each level contains 20 questions
const totalLevels = 5; // 5 levels in total

// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressBarEl = document.getElementById("progress-bar");
const levelEl = document.getElementById("level");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");

// Timer variables
let timeLeft = 30;
let timerInterval;

// Function to display the current question
function displayQuestion() {
    clearInterval(timerInterval);
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update the question and options
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.classList.add("option-btn");
        optionBtn.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(optionBtn);
    });

    // Update the progress bar and level display
    levelEl.textContent = `Level: ${currentLevel}`;
    const progress = (currentQuestionIndex % questionsPerLevel) / questionsPerLevel * 100;
    progressBarEl.style.width = progress + "%";

    // Start the timer
    timeLeft = 30;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        nextQuestion();
    }
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

// Function to go to the next question or level
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex % questionsPerLevel === 0) {
        currentLevel++;
        if (currentLevel > totalLevels) {
            endQuiz();
            return;
        }
    }

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    questionEl.textContent = `Quiz completed! Your score is ${score}/${questions.length}.`;
    optionsEl.innerHTML = ""; // Clear the options
    progressBarEl.style.width = "100%"; // Full progress bar
}

// Start button click event
startBtn.addEventListener("click", function() {
    startBtn.style.display = "none"; // Hide the start button
    displayQuestion(); // Start the quiz
});
