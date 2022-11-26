const inquirer = require('inquirer');
const { Engineer, Intern, Manager } = require('./lib');
const templateCode = require('./src/renderHTML');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

let employeeArr = [];

const promptUser = () => {
  inquirer
    .prompt([
      {
        message: `what is the team manager's name?`,
        name: 'name',
        type: 'input',
      },
      {
        message: `what is the manager's ID?`,
        name: 'id',
        type: 'input',
      },
      {
        message: `What is the manager's email address?`,
        name: 'email',
        type: 'input',
      },
      {
        message: `What is the manager's office number?`,
        name: 'officeNumber',
        type: 'input',
      },
    ])
    .then(manager => {
      let newManager = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.officeNumber,
      );
      employeeArr.push(newManager);
      engineerOrIntern();
    });
};

const engineerOrIntern = () => {
  inquirer
    .prompt([
      {
        message: `what is the team manager's name?`,
        name: 'enginnerOrIntern',
        type: 'list',
        choices: ['Engineer', 'Intern', 'exit'],
      },
    ])
    .then(choices => {
      if (choices.enginnerOrIntern === 'Engineer') {
        inquirer
          .prompt([
            {
              message: `what is the engineer's name?`,
              name: 'name',
              type: 'input',
            },
            {
              message: `what is the engineer's ID?`,
              name: 'id',
              type: 'input',
            },
            {
              message: `What is the engineer's email address?`,
              name: 'email',
              type: 'input',
            },
            {
              message: `What is the engineer's github?`,
              name: 'github',
              type: 'input',
            },
          ])
          .then(engineer => {
            let newEngineer = new Engineer(
              engineer.name,
              engineer.id,
              engineer.email,
              engineer.github,
            );
            employeeArr.push(newEngineer);
            engineerOrIntern();
          });
      }
      if (choices.enginnerOrIntern === 'Intern') {
        inquirer
          .prompt([
            {
              message: `what is the intern's name?`,
              name: 'name',
              type: 'input',
            },
            {
              message: `what is the intern's ID?`,
              name: 'id',
              type: 'input',
            },
            {
              message: `What is the intern's email address?`,
              name: 'email',
              type: 'input',
            },
            {
              message: `What is the intern's school?`,
              name: 'school',
              type: 'input',
            },
          ])
          .then(intern => {
            let newIntern = new Intern(
              intern.name,
              intern.id,
              intern.email,
              intern.school,
            );
            employeeArr.push(newIntern);
            engineerOrIntern();
          });
      }
      if (choices.enginnerOrIntern === 'exit') {
        writeFileBuilder(employeeArr);
      }
    });

  const writeFileBuilder = content => {
    const htmlOutput = path.join('./dist', 'teamIO.html');

    fs.writeFile(htmlOutput, templateCode(content), err =>
      err ? console.log(err) : console.log(`Successfully Created teamIO.html`),
    );
  };
};
promptUser();
