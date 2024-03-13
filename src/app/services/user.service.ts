import { NextRequest,NextResponse } from "next/server";
import { pool } from "@/lib/db";

class UserService {
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


export default UserService;