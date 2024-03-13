document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', startGame);
    
    // Add event listeners for each option button using a for loop
    for (let i = 0; i < 4; i++) {
        const optionButton = document.getElementById(`option${'ABCD'[i]}`);
        optionButton.addEventListener('click', function() {
            checkAnswer('ABCD'[i]);
        });
    }
    // Add event listeners for play again and home buttons
    document.getElementById('playAgainButton').addEventListener('click', restartQuiz);
    document.getElementById('homeButton').addEventListener('click', showHomePage);
});

// Array containing landmark data (name, image, options, and correct answer).
const landmarks = [
    { 
        name:'Cloud Gate Sculpture “The Bean"',
        image: '../assets/monument-images/cloud-gate.jpg', 
        options: ['Iowa', 'Wisconsin', 'Minnesota', 'Illinois'],
        answer: 'Illinois', 
    },
    { 
        name:'Mount Rushmore', 
        image: '../assets/monument-images/mount-rushmore.jpg', 
        options: ['Nevada', 'North Dakota', 'Colorado', 'South Dakota'],
        answer:'South Dakota', 
    },
    { 
        name:'The Grand Canyon', 
        image: '../assets/monument-images/grand-canyon.jpg', 
        options: ['Nevada', 'Arizona', 'Utah', 'Rhode Island'],
        answer:'Arizona', 
    },
    {
        name: 'Statue of Liberty',
        image: '../assets/monument-images/statue-of-liberty.jpg',
        options: ['Virginia', 'Rhode Island', 'New York', 'Delaware'],
        answer: 'New York',
    },
    {
        name: 'Hoover Dam',
        image: '../assets/monument-images/hoover-dam.jpg',
        options: ['Nevada', 'Hawaii', 'New Mexico', 'Texas'],
        answer: 'Nevada',
    },
    {
        name: 'Golden Gate Bridge',
        image: '../assets/monument-images/golden-gate.jpg',
        options: ['Maine', 'Idaho', 'California', 'Montana'],
        answer: 'California',
    },
    {
        name: 'Lincoln Memorial',
        image: '../assets/monument-images/lincoln-memorial.jpg',
        options: ['Washington', 'Washington D.C.', 'Louisiana', 'West Virginia'],
        answer: 'Washington D.C.',
    },
    {
        name: 'Crazy Horse Memorial',
        image: '../assets/monument-images/crazy-horse.jpg',
        options: ['Nebraska', 'North Dakota', 'Iowa', 'South Dakota'],
        answer: 'South Dakota',
    },
    {
        name: 'Monument Valley',
        image: '../assets/monument-images/monument-valley.jpg',
        options: ['Nevada', 'North Dakota', 'Colorado', 'Arizona'],
        answer: 'Arizona',
    },
    {
        name: 'The Space Needle',
        image: '../assets/monument-images/space-needle.jpg',
        options: ['Nevada', 'North Dakota', 'Colorado', 'Washington'],
        answer: 'Washington',
    },
];

let currentQuestion = 0;
let score = 0;

/**
 *  Function to start the quiz
 */ 
function startQuiz() {
    // Code to start the quiz
}

/**
 * Function to load a question
 */
function loadQuestion() {
    // Code to load a question
}

/**
 * Function to check the answer
 */
function checkAnswer(selectedOption) {
    // Code to check the answer
}

/**
 * Function to move to the next question
 */ 
function nextQuestion() {
    // Code to move to the next question
}

/**
 * Function to show the quiz results
 */ 
function showResults() {
    // Code to show the quiz results
}

/** 
 * Function to restart the quiz
 */
function restartQuiz() {
    // Code to restart the quiz
}