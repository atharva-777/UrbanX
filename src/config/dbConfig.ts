import { Pool, Client } from "pg";
import knex from "knex";

const database = knex({
  client: "pg",
  connection: {
    user: process.env.PGSQL_USER,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    database: process.env.PGSQL_DATABASE,
  },
});

database.migrate.latest();

const pg = require("knex")({
  client: "pg",
  connection: {},
});

const pool = new Pool({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  password: process.env.PGSQL_PASSWORD,
  database: process.env.PGSQL_DATABASE,
  port: 5432,
});
