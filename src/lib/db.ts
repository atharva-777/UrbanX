import { Pool, Client } from "pg";
const connectionString = process.env.DATABASE_URL;

const connect = async () => {
  const conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    //   port: process.env.PGSQL_PORT,
    port: 5432,
    database: process.env.PGSQL_DATABASE,
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
