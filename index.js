const inquirer = require("inquirer")
const fs = require("fs") // writing to HTML with fs method //what to write // where to write
const path = require("path");//path module provides utilities for working with file and directory paths
const generateHTML = require("./generateHTML");

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const teamArr = [];

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


//manager question
const mgrQ = [

    {
        type: 'input',
        name: 'office',
        message: 'Manager office number:',
    }
];

function manager(empInfo) {
    //console.log(empInfo); // logs object with name/id/email/role a second time
    inquirer.prompt(mgrQ).then((responses) => {
        empInfo.officeNo = responses.office;
        teamArr.push(empInfo);
        console.log(teamArr);
        //console.log(responses); // logs the answer to mgrQ in addition to full team array
    })
};

//engineer question
const engQ = [
    {
        type: 'input',
        name: 'github',
        message: 'Engineer GitHub link:',
    }
];
function engineer(empInfo) {
    inquirer.prompt(engQ).then((responses) => {
        empInfo.githubLink = responses.github;
        teamArr.push(empInfo);
        console.log(teamArr);
        console.log(responses.github);

    })
};

//intern question
const intQ = [
    {
        type: 'input',
        name: 'school',
        message: 'Intern school:',
    }
];
function intern(empInfo) {
    inquirer.prompt(intQ).then((responses) => {
        empInfo.schoolName = responses.school;
        teamArr.push(empInfo);
        console.log(teamArr);

    })

};

function initRoleQ() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        //team.push(responses);
        switch (responses.role) {
            case "Manager":
                manager(responses);
                break;
            case "Engineer":
                engineer(responses);
                break;
            case "Intern":
                intern(responses);
                break;
        }
    })

}

function writeToFile(fileName, data) {
    let teamArr = data;
    return fs.writeFileSync(path.join(process.cwd(), fileName), data) //file in current working directory

}

writeToFile("index.html", generateHTML(teamArr))
initRoleQ();


