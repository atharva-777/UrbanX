import { api } from "../config/api";

class CartService {
  static async addToCart(userId: number, productId: number, quantity: number) {
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
    const res = await api.post("/cart/getCart",{userId});
    return res.data;
  }
}
