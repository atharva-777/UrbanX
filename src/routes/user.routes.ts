import { Router } from "express";

const userRouter = Router();

userRouter.route("/custom").get((req,res)=>{
    res.send('Hello Atharva');
});

userRouter.route("/orders");

export default userRouter;
