// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
        validate: (value) => {if(value){return true} else {return 'You must enter a project title'}}, 
    },
    {
        type: 'input',
        name: 'description',
        message: 'A description of the project:',
        validate: (value) => {if(value){return true} else {return 'You must enter a project description'}},
    },
    {
        type: 'input',
        name: 'toc',
        message: 'Table of Contents:',
        validate: (value) => {if(value){return true} else {return 'You must enter a table of contents'}},
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
        validate: (value) => {if(value){return true} else {return 'You must enter installation instructions'}},
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe instructions and example for use:',
        validate: (value) => {if(value){return true} else {return 'You must enter usage instructions and an example'}},
    },
    {
        type: 'list',
        name: 'license',
        message: 'Add your license(s):',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate: (value) => {if(value){return true} else {return 'You must enter your license(s)'}},
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include guidelines for how to contribute?',
        validate: (value) => {if(value){return true} else {return 'You must enter contribution guidelines'}},
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include a test for your application and an example of how to run the test:',
        validate: (value) => {if(value){return true} else {return 'You must include a test for your application'}},
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions?',
        validate: (value) => {if(value){return true} else {return 'You must enter a way to direct questions'}},
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username: ',
        validate: (value) => {if(value){return true} else {return 'You must enter your username'}},
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
        validate: (value) => {if(value){return true} else {return 'You must enter your email'}},
    }
];

// TODO: Create a function to write README file
// I don't understand why it was giving me an error when written the original way
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Good job!')
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(rmInfo => {
    return writeToFile(rmInfo);
})
.catch(err => {
    console.log(err);
})
