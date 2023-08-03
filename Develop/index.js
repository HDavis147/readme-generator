// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What are the instructions to install your application?',
    'How is your application used?',
    'What are the guidelines for contributing to your application?',
    'What are the instructions for testing your application?',
    'What is the description of your project?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const runGenerator = generateMarkdown(data);
    fs.writeFile(fileName, runGenerator, (err) =>
    err ? console.error(err) : console.log('Markdown Created')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
  .prompt([
    {
        type: 'input',
        message: `${questions[0]}`,
        name: 'projectName',
    },
    {
        type: 'input',
        message: `${questions[1]}`,
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: `${questions[2]}`,
        name: 'projectUse',
    },
    {
        type: 'input',
        message: `${questions[3]}`,
        name: 'projectContribution',
    },
    {
        type: 'input',
        message: `${questions[4]}`,
        name: 'projectTest',
    },
    {
        type: 'input',
        message: `${questions[5]}`,
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: `${questions[6]}`,
        name: 'gitUser',
    },
    {
        type: 'input',
        message: `${questions[7]}`,
        name: 'userEmail',
    }
  ])
  .then((data) => {
    const fileName = data.projectName + ".md";
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();