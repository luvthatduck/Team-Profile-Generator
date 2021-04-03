
// Need to get input from user - inquirer
const fs = require('fs');
const inquirer = require('inquirer');
// const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

// Create employee objects from input
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
      message: "Enter Manager's Office Number",
    },
  ])
    .then(RESP => {
      const manager = new Manager(RESP.managername, RESP.managerid, RESP.manageremail, RESP.officenumber);
      employees.push(manager);
      // console.log(manager.getRole());
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
    start();
  })
};


//// If intern is chosen 
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
      choices: ['Manager', 'Engineer', 'Intern', 'Finished building team!'],
    },

  ]).then(function (response) {
    console.log("RESP", response.position)
    if (response.position === 'Manager') {
      askManagerQues();
    } else if (response.position === 'Engineer') {
      askEngineerQues();
    } else if (response.position === 'Intern') {
      askInternQues();
    } else {
      generateHTML();
    }
  })

}

// Compile the team 
// Create HMTL from employee objects
function generateHTML() {
  const htmlArray = [];

  //Head and Section of HTML
  const htmlHead = `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
  <title>Team Profile </title>
</head>

<body>
  <section class="section">
    <div class="container has-background-info-dark">
      <h1 class="title has-text-centered has-text-white-ter">
        Team Profile
      </h1>
      <p class="">

      </p>
    </div>
  </section>
  <section class="section has-background-link-light">
    <div class="columns">

      
  `
  htmlArray.push(htmlHead);

  for (let i = 0; i < employees.length; i++) {
   console.log(employees[i].name)
   
    let object = `
    <div class="column is-one-third">
        <div class="card">
    <header class="card-header">
            <p class="card-header-title ">
              ${employees[i].getRole()}
            </p>
       
          </header>
          <div class="card-content">
            <div class="content">
              <p class="title">${employees[i].name}</p>
            </div>
          </div>
          <p>
            Employee ID: ${employees[i].id}
          </p>
          <p>
            Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a>
          </p>
          `
    if (employees[i].officenumber) {
      object += `
            <p>Office Number: ${employees[i].officenumber}
            `
    }
    if (employees[i].github) {
      object +=`
            <p>GitHub: <a href="https://github.com/${(employees[i].github)}">${(employees[i].github)}</a>
            </p>
            `
    }
    if (employees[i].school) {
      object +=`
            <p>School:${(employees[i].school)}</p>
            `
    }
    object += `
          
            </div >
         </div >     
     `
     htmlArray.push(object)
  
  }

  const htmlFoot = `
  </div>

  </section>

</body>

</html>
  `
htmlArray.push(htmlFoot);

// Write out that html for a file
fs.writeFile(`./dist/generated-html.html`, htmlArray.join(""), function (err) {
        
})
}

start();


