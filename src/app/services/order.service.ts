import { api } from "../config/api";

class OrderService {
  static async getOrders(uid: string) {
    const res = api.post("/api/orders/getOrders", { uid: uid });
    return res;
  }

  static async getOrder(uid: string, orderId: string) {
    const res = api.post("/api/orders/getOrder", {
      uid: uid,
      orderId: orderId,
    });
    return res;
  }

  static async placeOrder(orderData: any) {
    const res = api.post("/api/orders/placeOrder", { orderData });
    return res;
  }

}

export default OrderService;
