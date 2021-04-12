const inquirer = require("inquirer")

const fs = require("fs") // writing to HTML with fs method //what to write // where to write
const path = require("path");//path module provides utilities for working with file and directory paths

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");


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
        type: 'checkbox',
        name: 'role',
        message: 'Employee role:',
        choices: [
            'Manager', 'Engineer', 'Intern'
        ],
    },

]
