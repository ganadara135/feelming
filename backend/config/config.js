const dotenv = require('dotenv');

dotenv.config();

//console.log("test : ", process.env)

module.exports = {
  "development": {
    "username": "fixunit",
    "password": process.env.DB_PASSWORD,
    "database": "fixunit",
    "host": "db-feelming.c9ykurpormoh.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false,
    "port": 3306,
    "language": 'kr'
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "fixunit",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "fixunit",
    "password": process.env.DB_PASSWORD,
    "database": "fixunit",
    "host": "db-feelming.c9ykurpormoh.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false,
    "port": 3306,
    "language": 'kr'
  }
}
