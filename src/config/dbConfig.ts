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

// console.log(await pool.query("SELECT NOW()"));

const client = new Client({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  password: process.env.PGSQL_PASSWORD,
  database: process.env.PGSQL_DATABASE,
  port: 5432,
});

// await client.connect();
// console.log(await client.query("SELECT NOW()"));
// await client.end();

export { pool, client };

export const createOrder = async (
  userId: number,
  total: number
): Promise<number> => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING id",
      [userId, total]
    );
    return result.rows[0].id;
  } finally {
    client.release();
  }
};

const connectionString = process.env.DATABASE_URL;

const connect = async () => {
  const conn = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "ecomorderdb",
    password: "Atharva@123",
  });

  await conn.query("SELECT NOW()");
  await conn.end();

  const client = new Client({
    connectionString,
  });

  await client.connect();
  await client.query("SELECT NOW()");
  await client.end();
};
export default connect;
