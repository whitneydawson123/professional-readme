// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What\'s the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What/s the description of your project?'
    },
    {
        type: 'input',
        name: 'installation', 
        message: 'What are the installation requirements?'
    }
// for the license, use a list and give the user 4 choices
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs command to write the file from data
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    // call the generate markdown function using the answers from the inquirer prompt
    console.log("Answers are", answers)
    console.log("README.md",generateMarkdown(answers))
    // writeToFile("README.md",generateMarkdown(answers))
   })
}

// Function call to initialize app
init();
