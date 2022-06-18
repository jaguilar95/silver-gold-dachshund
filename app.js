const inquirer = require("inquirer");
const dummyDepartments = [
  "Sales",
  "Human Resources",
  "Accounting",
  "Facilities",
  "Warehouse",
];
const dummyRoles = [
  "Sales Person",
  "Employee Relations",
  "Accountant",
  "Sanitation Technician",
  "Warehouse Picker",
];
const dummyManagers = ["Jonathan Joestar", "Jotaro Kujo", "Josuke Higashitaka"];
const dummyEmployees = [
  "Dio Brando",
  "Will Anthonio Zeppeli",
  "Kiochi Hirose",
  "Rohan Kishibe",
  "Okuyasu Nijimura",
  "Caesar Anthonio Zeppeli",
  "Rober E.O. Speedwagon",
  "Jean Pierre Polnareff",
];

const promptStart = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "mainMenu",
      message: "What would you like to do? (SELECT from options below)",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
    {
      type: "input",
      name: "newDepartment",
      message:
        "What is the NAME of the department you would like to add? (Required)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add a department") {
          return true;
        } else {
          false;
        }
      },
      validate: (newDepartmentInput) => {
        if (newDepartmentInput) {
          return true;
        } else {
          console.log("Please enter a valid department NAME!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "newRoleTitle",
      message: "What is the JOB TITLE for the new role? (Required)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add a role") {
          return true;
        } else {
          false;
        }
      },
      validate: (newRoleTitleInput) => {
        if (newRoleTitleInput) {
          return true;
        } else {
          console.log("Please enter a valid JOB TITLE!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "newRoleSalary",
      message: "What is the SALARY for the new role? (Required)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add a role") {
          return true;
        } else {
          false;
        }
      },
      validate: (newRoleSalaryInput) => {
        if (newRoleSalaryInput) {
          return true;
        } else {
          console.log("Please enter a valid SALARY!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "newRoleDepartment",
      message:
        "What is the DEPARTMENT for the new role? (SELECT from the list below)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add a role") {
          return true;
        } else {
          false;
        }
      },
      choices: dummyDepartments,
    },
    {
      type: "input",
      name: "newEmployeeFirst",
      message: "What is the new employee's FIRST NAME? (Required)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add an employee") {
          return true;
        } else {
          false;
        }
      },
      validate: (newEmployeeFirstInput) => {
        if (newEmployeeFirstInput) {
          return true;
        } else {
          console.log("Please enter a valid FIRST NAME!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "newEmployeeLast",
      message: "What is the new employee's LAST NAME? (Required)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add an employee") {
          return true;
        } else {
          false;
        }
      },
      validate: (newEmployeeLastInput) => {
        if (newEmployeeLastInput) {
          return true;
        } else {
          console.log("Please enter a valid LAST NAME!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "newEmployeeTitle",
      message:
        "What is the JOB TITLE of the new employee? (SELECT from the list below)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add an employee") {
          return true;
        } else {
          false;
        }
      },
      choices: dummyRoles,
    },
    {
      type: "list",
      name: "newEmployeeManager",
      message:
        "Who is the new employee's MANAGER? (SELECT from the list below)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Add an employee") {
          return true;
        } else {
          return false;
        }
      },
      choices: dummyManagers,
    },
    {
      type: "list",
      name: "updateSelectEmployee",
      message:
        "Which EMPLOYEE would you like to update? (SELECT from the list below)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Update an employee role") {
          return true;
        } else {
          false;
        }
      },
      choices: dummyEmployees,
    },
    {
      type: "list",
      name: "updateSelectRole",
      message: "What should be their new ROLE? (SELECT from the list below)",
      when: ({ mainMenu }) => {
        if (mainMenu === "Update an employee role") {
          return true;
        } else {
          false;
        }
      },
      choices: dummyRoles,
    },
  ]);
};

promptStart().then((answers) => console.log(answers));

/*
Choosing an to view all departments, show:
    * Department names
    * Department ids

Choosing to view all roles, show:
    * Job title
    * Role id
    * Department belonging to
    * Salary (all for role)

Choosing to view all employees, show:
    * Employee data
    * Employee id
    * First name
    * Last name
    * Job Title
    * Department
    * Salary
    * Manager
*/
