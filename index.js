// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
    default: 'fun project'
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a project description.',
    default: 'this is a fun description'
},
{
    type: 'input',
    name: 'install',
    message: 'Provide installation instructions.',
    default: 'npm install'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions.',
    default: ''
},
{
    type: 'input',
    name: 'contributing',
    message: 'To.',
    default: 'npm install'
},
{
    type: 'input',
    name: 'test',
    message: 'Provide testing instructions.',
    default: 'npm run test'
},
{
    type: 'rawlist',
    name: 'license',
    message: 'Select a license',
    default: 'MIT',
    choices: [
        'MIT',
        'BSD',
        'CC',
    ]
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then((answers) => {
        const result = generateMarkdown(answers);
        console.log(result);
    })
};

// Function call to initialize app
init();
