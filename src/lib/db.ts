import { Pool, Client } from "pg";
const connectionString = process.env.DATABASE_URL;
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  password: process.env.PGSQL_PASSWORD,
  database: process.env.PGSQL_DATABASE,
  port: 5432,
});

export {pool};

// const connect = async () => {
//   const conn = new Pool({
//     user: process.env.PGSQL_USER,
//     password: process.env.PGSQL_PASSWORD,
//     host: process.env.PGSQL_HOST,
//     //   port: process.env.PGSQL_PORT,
//     port: 5432,
//     database: process.env.PGSQL_DATABASE,
//   });

//   await conn.query("SELECT NOW()");
//   await conn.end();

//   const client = new Client({
//     connectionString,
//   });

//   await client.connect();
//   await client.query("SELECT NOW()");
//   await client.end();
// };
// export default connect;
