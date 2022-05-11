const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page.template");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};

const idArray = [];

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter information asked";
            },
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is manager ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    return true
                }
                return 'Please enter a positive number greater than 0'
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is manager email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/)
                if (pass) {
                    return true
                }
                return 'Please enter a valid email'
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is manager office number?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    return true
                }
                return 'Please enter a positive number greater than 0'
            }
        }
    ]).then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers,managerOfficeNumber
            );
            teamMembers.manager = manager
            idArray.push(answers.managerId);
            buildTeam();
    });
}



// function render(teamMembers) {
//     return "this will be html";
// };

function buildTeam() {
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err);
        }
    });
};

createManager();


