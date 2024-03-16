import { api } from "@/app/config/api";
import { NextRequest, NextResponse } from "next/server";
import CartService from "@/app/services/cart.service";

export async function GET(request: NextRequest) {
  try {
    // const res = await api.get("/cart");
    const res = await CartService.getCart();
    return NextResponse.json({
      "Result ": res.data,
      message: "Cart fetched from next api",
    });
  } catch (err) {
    return NextResponse.json({ Error: err });
  }
}
