// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const express = require('express');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([ 
    {
        type: 'input',
        name: 'title',
        message: 'What\'s the title of your project?',
        validate: titleInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What/s the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation', 
        message: 'What are the installation requirements?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation requirements!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'What are the usage information?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!');
                return false;
            }
        }
    },
    {
        
    }
// for the license, use a list and give the user 4 choices
]);
};

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
promptUser();
