// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input

inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
},
{
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose of this project?',

},
{
    type: 'input',
    name: 'languages',
    message: 'What languages were used on this project?',

},
{
    type: 'list',
    name: 'license',
    message: 'Which license did you use for this project?',
    choices: ['Apache', 'MIT', 'Boost', 'GNU', 'Eclipse'],
},

{
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
]).then((answers) => {
    console.log(answers);
    fs.writeFile('newREADME.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         console.log('creating README.md file---');
//         writeToFile('./dist/README.md', generateMarkdown({ ...answers }));
//     });
// }

// Function call to initialize app
// init();

