// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
},
{
    type: "input",
    message: "What is this project about?",
    name: "description"
},
{
    type: "input",
    message: "What needs to be installed for this application?",
    name: "packages"
},
{
    type: "input",
    message: "How is this application used?",
    name: "usage"
},
{
    type: "input",
    message: "Contact information for inquiries",
    name: "contact"
},
{
    type: "input",
    message: "What is your github username?",
    name: "github"
},
{
    type: "input",
    message: "What is your github repo name?",
    name: "repo"
},
{
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: ["MIT", "ISC", "GPU", "Apache"]
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "input",
    message: "Who was involved in creating this application?",
    name: "credit"
},
{
    type: "input",
    message: "How did you test your application?",
    name: "test"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error)=>{error ? console.log(error) : console.log("README File Created")
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        const generated = generateMarkdown(data)
        writeToFile("./destination/README.md")
    }
}

// Function call to initialize app
init();
