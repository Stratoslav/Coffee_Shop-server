const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  host: process.env.HOST_DATABASE,
  port: process.env.PORT_DATABASE,
  database: process.env.NAME_DATABASE,
});

module.exports = pool;
