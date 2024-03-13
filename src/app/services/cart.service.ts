import { api } from "../config/api";
// import { pool } from "@/lib/db";
import { Pool } from "pg";
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "ecomorderdb",
  password: "Atharva@123",
});

class CartService {
  static async addToCart(userId: number, productId: number, quantity: number) {
    pool.query(
      `INSERT INTO cart VALUES (1,${userId},${productId},${quantity}) RETURNING *`,
      [userId, productId,quantity],
      (error, results) => {
        if (error) {
          throw error;
        }
        return NextResponse.json({
          message: `Product added to cart: ${results.rows[0].id}`,
        });
      }
    );

    const data =  await pool.query('SELECT * FROM cart');

    return NextResponse.json({
      message: "Done",
      data,
    });

    const res = await api.post("/cart/addToCart", {
      userId,
      productId,
      quantity,
    });
    return res.data;
  }

  static async updateCart(userId: number, productId: number, quantity: number) {
    const res = await api.post("/cart/updateCart", {
      userId,
      productId,
      quantity,
    });
    return res.data;
  }

  static async removeFromCart(userId: number, productId: number) {
    const res = await api.post("/cart/removeFromCart", { userId, productId });
    return res.data;
  }

  static async getCart(userId: number) {
    const res = await api.post("/cart/getCart", { userId });
    return res.data;
  }
}

export default CartService;
