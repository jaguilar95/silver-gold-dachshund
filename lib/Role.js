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
}

module.exports = Role;
