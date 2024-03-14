import { Request, Response, NextFunction } from "express";
import { pool } from "../config/dbConfig";

class CartController {
  static async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      // const { uid, user_id, product_id, quantity } = req.body;
      const uid = 5,
        user_id = 16,
        product_id = 12,
        quantity = 5;
      pool
        .connect()
        .then(async () => {
          const result = await pool.query(
            "INSERT INTO cart (id,user_id, product_id,quantity) VALUES ($1, $2,$3,$4) RETURNING id",
            [uid, user_id, product_id, quantity]
          );
          return res.json({ "result ": result });
        })
        .catch((err) => {
          console.error("error adding product to cart in database", err);
        });
    } catch (err) {
      console.error("Error adding product in api");
    }
  }

  static async viewCart(req: Request, res: Response, next: NextFunction) {
    pool
      .connect()
      .then(async () => {
        console.log("Connected to PostgreSQL database from cart controller");
        const data = (await pool.query("SELECT * FROM cart")).rows;
        return res.json({ data: data });
      })
      .catch((err) => {
        console.error("Error connecting to PostgreSQL database", err);
      });
  }
}

export default CartController;
