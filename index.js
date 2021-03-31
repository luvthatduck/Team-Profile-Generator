
// Need to get input from user - inquirer
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/Manager');

const employees = [];
// promted to enter team manager's name, id, email and office number
function askManagerQues() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managername',
      message: "Enter Manager's name?",
    },
    {
      type: 'number',
      name: 'managerid',
      message: "Enter Manager's ID number?",
    },
    {
      type: 'input',
      name: 'manageremail',
      message: "Enter Manager's email address?",
    },
    {
      type: 'number',
      name: 'officenumber',
      messasge: "Enter Manager's Office Number",
    },
  ])
    .then(RESP => {
      const manager = new Manager(RESP.managername, RESP.managerid, RESP.manageremail, RESP.officenumber);
      employees.push(manager);
      // console.log(manager);
      start();
    })
};


// if engineer chosen
function askEngineerQues() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineername',
      message: "Enter engineer's name?",
    },
    {
      type: 'number',
      name: 'engineerid',
      message: "Enter engineer's ID number?",
    },
    {
      type: 'input',
      name: 'engineeremail',
      message: " Enter engineer's email address?",
    },
    {
      type: 'input',
      name: 'github',
      messasge: "Enter Engineer's GitHub Username",
    },
  ]).then(RESP => {
    const engineer = new Engineer(RESP.engineername, RESP.engineerid, RESP.engineeremail, RESP.github);
    employees.push(engineer);
    // console.log(engineer);
    start();
  })
};
// // If intern is chosen 

function askInternQues() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'internname',
      message: "Enter intern's name?",
    },
    {
      type: 'number',
      name: 'internid',
      message: "Enter intern's ID number?",
    },
    {
      type: 'input',
      name: 'internemail',
      message: " Enter intern's email address?",
    },
    {
      type: 'input',
      name: 'school',
      messasge: "Enter Intern's School?",
    },
  ]).then(RESP => {
    const intern = new Intern(RESP.internname, RESP.internid, RESP.internemail, RESP.school);
    employees.push(intern);
    // console.log(intern);
    start();
  })
};



function start() {
  inquirer.prompt([


    //prompted with menu with option to add engineer, intern or to
    // finish building team 
    {
      type: 'list',
      name: 'position',
      messasge: "Enter which postition to add next?",
      choices: ['Manager', 'Engineer', 'Intern', 'Finished building team'],
    },

  ]).then(function (response) {
    console.log("RESP", response.position)
    if (response.position === 'Manager') {
      askManagerQues();
    } else if (response.position === 'Engineer') {
      askEngineerQues();
    } else if (response.position === 'Intern') {

    } else {
      generateHTML()
    }
  })
}

function generateHTML() {
  for (let empy of employees) {
    console.log(empy);
  }
}


// Create employee objects from input
// const empy = new Employee(response.name, 0, '');
// console.log('empy', empy);

// Create HMTL from employee objects

// Write out that html for a file
function writeToFile(data) {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {

      return;
    }
  })
};
start();
