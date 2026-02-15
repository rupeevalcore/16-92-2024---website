// Emergency Mobile Fix Chatbot

// Function to initialize the chatbot
function initChatbot() {
    displayWelcomeMessage();
    setUpInteraction();
}

// Function to display the welcome message
function displayWelcomeMessage() {
    const welcomeMessage = 'Welcome to the Emergency Mobile Fix Chatbot!';
    renderMessage(welcomeMessage);
    displayButtons(['Start', 'Help']);
}

// Function to set up interaction response
function setUpInteraction() {
    document.addEventListener('click', (event) => {
        if (event.target.matches('.btn')) {
            handleButtonClick(event.target.innerText);
        }
    });
}

// Function to handle button clicks
function handleButtonClick(buttonText) {
    switch (buttonText) {
        case 'Start':
            stepOne();
            break;
        case 'Help':
            displayHelp();
            break;
        default:
            renderMessage('I did not understand that. Please choose an option.');
    }
}

// Step One of the conversation flow
function stepOne() {
    renderMessage('Step 1: Please describe your mobile issue.');
    // Here, we would handle user input and continue the flow based on response.
}

// Function to display help
function displayHelp() {
    renderMessage('For assistance, please call support at 123-456-7890.');
}

// Function to render messages with animation
function renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('chat-message');
    document.getElementById('chat-container').appendChild(messageElement);
    animateMessage(messageElement);
}

// Function to animate messages
function animateMessage(element) {
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s';
        element.style.opacity = '1';
    }, 100);
}

// Function to display interactive buttons
function displayButtons(buttons) {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = ''; // Clear previous buttons
    buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = button;
        buttonElement.classList.add('btn');
        buttonContainer.appendChild(buttonElement);
    });
}

// Initialize the chatbot when the page loads
window.onload = initChatbot;