import { api } from "../config/api";
import { NextRequest, NextResponse } from "next/server";

class CartService {

  static async getCart() {
    const result = await api.get("/cart");
    return result.data;
  }
  
  static async addToCart(
    uid: number,
    userId: number,
    productId: number,
    quantity: number
  ) {
    try {
      console.log("Adding cart requested");
      const result = await api.post("/addToCart", {
        uid,
        userId,
        productId,
        quantity,
      });
      return NextResponse.json({ Result: result.data });
    } catch (err) {
      return NextResponse.json({ error: err });
    }
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
}

export default CartService;
