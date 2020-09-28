//node code from node
const fs = require("fs");
const path = require("path");
//third party node code
const inquirer = require("inquirer");
//bring in your own module
const generateMarkdown = require("./utils/generateMarkDown");

//create array of objects to use with inquirer
const questions = [{
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
];

function start() {
    inquirer.prompt(questions).then(function(answers) {
        //start message
        console.log("Generating New ReadMe ... ");
        //write the file to a specific location
        fs.writeFileSync(
            //1st argument = filepath + Name
            path.join(process.cwd(), "README.md"), //define location
            //2nd argument data in string form
            generateMarkdown(answers) //returns data string
        )
    }).catch(error => {
        console.log(error);
    });;
}

start();