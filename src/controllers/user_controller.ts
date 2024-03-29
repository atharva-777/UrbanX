import { Request, Response, NextFunction } from "express";
import { pool } from "../config/dbConfig";

class UserController {
  static async login(req: Request, res: Response, next: NextFunction) {
    // console.log("request details", req);
    // return res.json({ message: "login" });
    try {
      // const { email } = req.body;
      const email = "atharva@gmail.com";
      pool.connect().then(async () => {
        const users = await pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        return res.json(users.rows);
      });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      // const { name, email, password } = req.body;
      const name = "two",
        email = "two@gmail.com",
        password = "two@123";
      pool.connect().then(async () => {
        const result = await pool.query(
          "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id",
          [name, email, password]
        );
        return res.json({ result: result });
      });
    } catch (err) {
      return res.json({ Error: err });
    }
  }
}

export default UserController;
