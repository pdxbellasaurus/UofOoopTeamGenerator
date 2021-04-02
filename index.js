const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/html-build.js');
const employees = [];

// const team = new Team();
const teamBuild = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name.",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter a name.'
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's 3-digit ID.",
            validate: answer => {
                if (answer = /^[0-9]{3}$/) {
                    return true;
                }
                return 'Please enter 3-digit whole number, no spaces.'
                }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address.",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter a valide email.'
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's 4-digit office number.",
            validate: answer => {
                if (answer = /^[0-9]{4}$/) {
                    return true;
                }
                return 'Please enter 4-digit whole number, no spaces.'
                }
        },
    ]).then(answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        newTeam(answers);
    });
};

newTeam = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'addChoice',
            message: 'Would you like to add additional employees to the team?',
            choices: ['Engineer', 'Intern', 'No additional employees to add']
        }

        ]).then(select => {
            switch (select.addChoice) {
                case 'Engineer':
                    newEngineer();
                    break;
                    case 'Intern':
                        newIntern();
                        break;
                        default:
                            buildTeam();
                        }
                    });
                }
                
                const newEngineer = () => {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the engineer's name.",
                            validate: answer => {
                                if (answer !== '') {
                                    return true;
                                }
                                return 'Please enter a name.'
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: "Enter the engineer's 3-digit ID.",
                            validate: answer => {
                                if (answer = /^[0-9]{3}$/) {
                                    return true;
                                }
                                return 'Please enter 3-digit whole number, no spaces.'
                                }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the engineer's email address.",
                            validate: answer => {
                                if (answer !== '') {
                                    return true;
                                }
                                return 'Please enter a valid email.'
                            }
                        },
                        {
                            type: 'input',
                            name: 'Github',
                            message: "Enter the engineer's Github username.",
                            validate: answer => {
                                if (answer !== '') {
                                    return true;
                                }
                                return 'Please enter the Github username.'
                            }
                        },
                    
                    ]).then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.Github);
                        employees.push(engineer);
                        newTeam(answers);
                    });
                }

                const newIntern = () => {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the intern's name.",
                            validate: answer => {
                                if (answer !== '') {
                                    return true;
                                }
                                return 'Please enter a name.'
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: "Enter the intern's 3-digit ID.",
                            validate: answer => {
                                if (answer = /^[0-9]{3}$/) {
                                    return true;
                                }
                                return 'Please enter 3-digit whole number, no spaces.'
                                }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the intern's email address.",
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Enter the intern's school.",
                            validate: answer => {
                                if (answer = /^[a-zA-Z]{3}$/) {
                                    return true;
                                }
                                return 'Please enter at least 3 characters.'
                            }
                        },
                    
                    ]).then(answers => {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        employees.push(intern);
                        newTeam(answers);
                    });
                }
                
                function buildTeam() {
                    fs.writeFileSync('./dist/team.html', html(employees), err => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    });
                }
                teamBuild();