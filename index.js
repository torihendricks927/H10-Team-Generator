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
            type: "input",
            name: "managerName",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter information asked";
            },
        },
        {
            type: "input",
            name: "managerId",
            message: "What is manager ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    return true
                }
                return "Please enter a positive number greater than 0";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is manager email?",
            validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter information asked";
                },
        },
        {
            type: "input",
            name: "managerOfficeNumber",
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
                answers.managerOfficeNumber
            );
            teamMembers.manager = manager
            idArray.push(answers.managerId);
            createTeam();
    });
}

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What is job title being added?",
            choices: [
                "Engineer",
                "Intern",
                "I dont want to add any more",
            ]
        }
    ]).then((answers) => {
        switch (answers.choice) {
            case "Engineer":
                addEngineer()
                break
            case "Intern":
                addIntern()
                break
            default:
                buildTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter information asked";
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "this ID is already taken"
                    } else {
                    return true
                    }
                }
                return "Please enter a positive number greater than 0";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/)
                if (pass) {
                    return true
                }
                return "Please enter a valid email";
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your github?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter information asked";
            },
        },
    ]).then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            );
            teamMembers.engineers.push(engineer);
            idArray.push(answers.id);
            createTeam();
    });
}



function addIntern() {}



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


