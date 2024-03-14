import { Router } from "express";
import { CartController } from "../controllers";

const userRouter = Router();

userRouter.route("/custom").get((req, res) => {
  res.send("Hello Atharva");
});

userRouter.route("/cart").get(CartController.viewCart);

userRouter.route("/addToCart").post(CartController.addToCart);


export default userRouter;
