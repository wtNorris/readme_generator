// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'A description of the project:'
    },
    {
        type: 'input',
        name: 'toc',
        message: 'Table of Contents:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe instructions and example for use:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Add you license(s):'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include guidelines for how to contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include a test for your application and an example of how to run the test:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
