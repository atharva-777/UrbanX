import { Pool, Client } from "pg";
import knex from "knex";

// const database = knex({
//   client: "pg",
//   connection: {
//     user: process.env.PGSQL_USER,
//     host: process.env.PGSQL_HOST,
//     password: process.env.PGSQL_PASSWORD,
//     database: process.env.PGSQL_DATABASE,
//   },
// });

// database.migrate.latest();

// const pg = require("knex")({
//   client: "pg",
//   connection: {},
// });

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "ecomorderdb",
  password: "Atharva@123",
  keepAlive: true,
});

const client = new Client({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  password: process.env.PGSQL_PASSWORD,
  database: process.env.PGSQL_DATABASE,
  port: 5432,
});

export { pool, client };

// const connectionString = process.env.DATABASE_URL;

// const connect = async () => {
//   const conn = new Pool({
//     user: "postgres",
//     host: "127.0.0.1",
//     port: 5432,
//     database: "ecomorderdb",
//     password: "Atharva@123",
//   });

//   await conn.query("SELECT NOW()");
//   await conn.end();

//   const client = new Client({
//     connectionString,
//   });

//   await client.connect();
//   await client.query("SELECT NOW()");
//   await client.end();

//   return {conn,client};
// };
// export default connect;
