const db = require("../db/connection");

class Department {
  constructor(answerData) {
    this.answers = answerData;
  }

  getDepartments() {
    const { mainMenu, ...rest } = this.answers;
    const sql = `SELECT * FROM departments`;

    if (mainMenu !== "View all departments") {
      return answers;
    }

    db.query(sql, (err, departments) => {
      if (err) {
        return err;
      }
      return console.table(departments);
    });
  }
}

module.exports = Department;
