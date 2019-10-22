const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "fixunit",
    "host": "172.17.0.2",   
    "dialect": "mysql",
    "operatorsAliases": false
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
    "operatorsAliases": false
  }
}
