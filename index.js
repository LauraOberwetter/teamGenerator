const inquirer = require("inquirer")

const fs = require("fs") // writing to HTML with fs method //what to write // where to write
const path = require("path");//path module provides utilities for working with file and directory paths

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

//employee questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Employee email address:',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Employee role:',
        choices: [
            'Manager', 'Engineer', 'Intern'
        ],
    },

]

function init() {
    inquirer.prompt(questions).then((responses) => { 
        console.log(responses);
    })
}

//manager question
const mgrQ = [
    {
        type: 'input',
        name: 'office',
        message: 'Manager office number:',
    }
];

function manager() {
    inquirer.prompt(mgrQ).then((responses) => {
        console.log(responses);

        class ManagerQ { //make a new instance of the manager class with all of the info you collected
            constructor(office) {
                this.office = office;
            }
        }
        responses.push(ManagerQ); //add that to a team array
    })};

//engineer question
const engQ = [
        {
            type: 'input',
            name: 'github',
            message: 'Engineer GitHub link:',
        }
    ];
    function engineer() {
        inquirer.prompt(engQ).then((responses) => {
            console.log(responses);

            class EngineerQ {
                constructor(github) {
                    this.github = github;
                }
            }
            responses.push(EngineerQ); //add that to a team array
        })};

//intern question
const intQ = [
            {
                type: 'input',
                name: 'school',
                message: 'Intern school:',
            }
        ];
        function intern() {
            inquirer.prompt(intQ).then((responses) => {
                console.log(responses);

                class InternQ {
                    constructor(school) {
                        this.school = school;
                    }
                }
                responses.push(InternQ); //add that to a team array

            })};

function initRoleQ() {
        inquirer.prompt(questions).then((responses) => {
            console.log(responses);
            switch (responses.role) { //cases and respective functions to be called here
                case "Manager":
                    manager();
                    break;
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    Intern();
                    break;
            }
        })
    }

// Function call to initialize app
init();



// .then(userChoice) => {
// }