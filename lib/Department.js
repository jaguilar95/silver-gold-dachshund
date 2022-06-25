const db = require("../db/connection");

class Department {
  constructor(answerData) {
    this.answers = answerData;
  }

  getDepartments() {
    const { mainMenu, ...rest } = this.answers;
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, departments) => {
      if (err) {
        return err;
      }

      return console.table(departments);
    });
  }

  addDepartment() {
    const { mainMenu, newDepartment } = this.answers;
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;

    db.query(sql, newDepartment, (err, department) => {
      if (err) {
        return err;
      }

      return console.log(
        `Department '${newDepartment}' has been successfully added`
      );
    });
  }

  getDepartmentNames() {
    const sql = `SELECT departments.name FROM departments`;

    db.query(sql, (err, departmentNames) => {
      if (err) {
        return err;
      }

      return console.log(departmentNames);
    });
  }
}

module.exports = Department;
