const db = require("../db/connection");

class Role {
  constructor(answerData) {
    this.answers = answerData;
  }

  getRoles() {
    const { mainMenu, ...rest } = this.answers;
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, roles) => {
      if (err) {
        return err;
      }

      return console.table(roles);
    });
  }

  addRole() {
    const { mainMenu, newRoleTitle, newRoleSalary, newRoleDepartment } =
      this.answers;
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;

    db.query(
      sql,
      [newRoleTitle, newRoleSalary, newRoleDepartment],
      (err, role) => {
        if (err) {
          return err;
        }

        return console.log(
          `Role '${newRoleTitle}' has been successfully added`
        );
      }
    );
  }
}

module.exports = Role;
