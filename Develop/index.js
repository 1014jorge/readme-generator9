// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
     },
     {
        type: 'input',
        name: 'build',
        message: 'Why did you build this project?',
     },
     {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
     },
     {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
     },
     {
        type: 'input',
        name: 'standOut',
        message: 'What makes your project stand out?',
     }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
