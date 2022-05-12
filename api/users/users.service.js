const pool = require("../../db/db.config");

let userDb = {};

userDb.getUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM ?? WHERE ?? = ?";
    pool.query(sql, ["users", "id", id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = userDb;
