// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What are the instructions to install your application?',
    'How is your application used?',
    'What are the guidelines for contributing to your application?',
    'What are the instructions for testing your application?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
  .prompt([
    {
      type: 'input',
      message: `${questions[0]}`,
      name: 'projectName',
    }
  ])
  .then((response) => {
    // do something with response
    // const runHTML = generateHTML(response)
  });

}

// Function call to initialize app
init();
