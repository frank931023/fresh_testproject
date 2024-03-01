const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../config.env") });

module.exports = {
  development: {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "YES",
    PORT: 3307,
    DB: "testdb",
    dialect: "mysql",
    // HOST: process.env.DB_HOST,
    // USER: process.env.DB_USER,
    // PASSWORD: process.env.DB_PASSWORD,
    // DB: process.env.DB_DATABASE,
    // dialect: process.env.DB_DIALECT,
    //   pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000,
    //   },
  },
};
