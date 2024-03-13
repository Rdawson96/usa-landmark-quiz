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
 * Function to start the game by hiding the home page and showing the game page, and loading the first question.
 */
function startGame() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('gamePage').classList.remove('hidden');
    loadQuestion();
}

/**
 * Function to load the current question, display it on the page, and reset button backgrounds.
 */
function loadQuestion() {
    // Call the function to display the question number
    displayQuestionNumber();

    //Get the current Question from array and populate the selected fields with the corresponding data
    const question = landmarks[currentQuestion];
    document.getElementById('quizImg').innerHTML = `<img src="images/${question.image}" alt="Landmark" class="img-container">`;
    document.getElementById('monumentName').innerHTML = question.name;

    // Update options using a loop to display options on buttons
    question.options.forEach((option, index) => {
        document.getElementById(`option${optionLetters[index]}`).innerHTML = option;
    });
}

/**
 * Function to check the user's answer, update the score and button colors, and proceed to the next question after a delay.
 * @param {string} selectedOption - The letter corresponding to the option chosen by the user (A, B, C, or D).
 */
function checkAnswer(selectedOption) {
    const correctAnswerIndex = landmarks[currentQuestion].options.indexOf(landmarks[currentQuestion].answer);
    const selectedButton = document.getElementById(`option${selectedOption}`);
    const selectedOptionIndex = ['A', 'B', 'C', 'D'].indexOf(selectedOption);
    
    // Check if the selected option index matches the correct answer index
    if (selectedOptionIndex === correctAnswerIndex) {
        // If the answer is correct, set the background color of the selected button to green
        selectedButton.style.backgroundColor = 'green';
        // Increment the score
        score++;
    } else {
        // If the answer is incorrect, set the background color of the selected button to red
        selectedButton.style.backgroundColor = 'red';
        // Set the background color of the button corresponding to the correct answer to green
        document.getElementById(`option${'ABCD'[correctAnswerIndex]}`).style.backgroundColor = 'green';
    }
    setTimeout(nextQuestion, 1000); // Move to next question after 1 second
}

/**
 * Function to proceed to the next question or show the results page if all questions have been answered.
 */
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < landmarks.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

/**
 * Function to show the results page with the user's score and a message based on their performance.
 */
function showResults() {
    document.getElementById('gamePage').classList.add('hidden');
    document.getElementById('resultsPage').classList.remove('hidden');
    
    const totalQuestions = landmarks.length;

    let message;
    if (score >= 8) {
        message = "Congratulations!! You really know your monuments!";
    } else if (score >= 6) {
        message = "Well done! You did good.";
    } else {
        message = "Better luck next time!";
    }
    document.getElementById('resultMessage').innerHTML = `${message}`;
    document.getElementById('resultText').innerHTML = `You got ${score} out of ${totalQuestions} questions correct.`;
}

/**
 * Function to restart the quiz by resetting the question index, score, button backgrounds, and showing the game page.
 */
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    
    // Reset button background colors
    const optionLetters = ['A', 'B', 'C', 'D'];
    optionLetters.forEach(letter => {
        document.getElementById(`option${letter}`).style.backgroundColor = '';
    });

    // Reset page number display
    document.getElementById('questionNumber').textContent = '';
    
    // Hide results page and show game page
    document.getElementById('resultsPage').classList.add('hidden');
    document.getElementById('gamePage').classList.remove('hidden');

    loadQuestion();
}