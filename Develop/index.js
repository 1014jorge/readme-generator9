//  packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: choices } = require('inquirer/lib/objects/choices');


// an array of questions for user input

inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the name of your application?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your application.',
},
{
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose of this application?',

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
    choices: ['Apache', 'MIT', 'Boost', 'ISC', 'Eclipse',],
},
{
    type: 'input',
    name: 'installation',
    message: 'What is required to install your application?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Who should use this application?',
},
{
    type: 'input',
    name: 'credits',
    message: 'Who created this application? ',
},
{
    type: 'input',
    name: 'contributors',
    message: 'Any contributors? If so list them here.'
},
{
    type: 'input',
    name: 'github',
    message: 'Please provide GitHub username.',
},
{
    type: 'input',
    name: 'githubLink',
    message: 'Please provide the link to your GitHub.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide email address.',
},
//used to generate new readme 
]).then((answers) => {
    console.log(answers);
    fs.writeFile('newREADME.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})

