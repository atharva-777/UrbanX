import { Router } from "express";
import { CartController } from "../controllers";

const cartRouter = Router();

cartRouter.route('/getCart').get(CartController.viewCart);

cartRouter.route('/addToCart').post(CartController.addToCart);

export default cartRouter;