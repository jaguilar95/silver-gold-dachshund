const db = require("../db/connection");

class Employee {
  constructor(answerData) {
    this.answers = answerData;
  }

  getEmployees() {
    const { mainMenu, ...rest } = this.answers;
    const sql = `SELECT e.id, e.first_name, e.last_name, roles.title AS employee_title, departments.name AS employee_department, roles.salary AS employee_salary, CONCAT(m.first_name, ' ', m.last_name) AS employee_manager FROM employees e 
    LEFT JOIN roles ON e.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees m on e.manager_id = m.id`;

    db.query(sql, (err, employees) => {
      if (err) {
        return err;
      }

      return console.table(employees);
    });
  }
}

module.exports = Employee;
