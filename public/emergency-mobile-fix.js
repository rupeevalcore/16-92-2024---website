// Dynamic Chatbot Implementation

class ChatBot {
    constructor() {
        this.steps = [
            this.question1,
            this.question2,
            this.question3
        ];
        this.currentStep = 0;
    }

    start() {
        this.sendMessage("Welcome to the interactive chatbot! Let's begin.");
        this.nextStep();
    }

    nextStep() {
        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].call(this);
            this.currentStep++;
        } else {
            this.sendMessage("Thank you for your responses!");
        }
    }

    question1() {
        this.sendMessage("What is your name?");
        this.createResponseButtons(["Submit", "Skip"]);
    }

    question2() {
        this.sendMessage("What service are you interested in?");
        this.createResponseButtons(["Inquiry", "Registration"]);
    }

    question3() {
        this.sendMessage("Would you like to receive updates?");
        this.createResponseButtons(["Yes", "No"]);
    }

    sendMessage(message) {
        // Function to display message from the bot with proper styling
        console.log(`Bot: ${message}`);
    }

    createResponseButtons(options) {
        // Function to create buttons for user responses
        options.forEach(option => {
            console.log(`Button: ${option}`);
        });
        // Simulate user response handling
        this.handleUserResponse(options);
    }

    handleUserResponse(options) {
        // Simulate user selecting an option and navigating if needed
        const simulatedUserResponse = options[0]; // Simulating the first button click
        if (simulatedUserResponse === "Registration") {
            this.navigateToRegistration();
        }
        this.nextStep();
    }

    navigateToRegistration() {
        // Function to handle navigation to registration forms
        console.log("Navigating to registration form...");
    }
}

// Initialize and start the chatbot
const chatbot = new ChatBot();
chatbot.start();