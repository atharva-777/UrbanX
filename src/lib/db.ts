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

export class UserService {
  static async createUser(data: any, req: NextRequest, res: NextResponse) {
    const { name, email } = data;

    pool.query(
      `INSERT INTO users (name, email) VALUES (${name},${email}) RETURNING *`,
      [name, email],
      (error, results) => {
        if (error) {
          throw error;
        }
        return NextResponse.json({
          message: `User added with ID: ${results.rows[0].id}`,
        });
      }
    );
  }
}

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
