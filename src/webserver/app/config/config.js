require("dotenv").config();
const env = process.env;

module.exports = {
  development: {
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    dialect: "postgres",
  },
};
