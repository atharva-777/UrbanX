import { api } from "@/app/config/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { uid, user_id, product_id, quantity } = reqBody;
    const res = await api.post("/addToCart", {
      uid,
      user_id,
      product_id,
      quantity,
    });
    return NextResponse.json({ "Result : ": res });
  } catch (err) {
    return NextResponse.json({ Error: err });
  }
}
